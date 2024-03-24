import fs from 'node:fs/promises';

import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { ClientApp } from '@wsh-2024/app/src/index';

import { INDEX_HTML_PATH } from '../../constants/paths';

import { COMPANY } from './Company';
import { CONTACT } from './Contact';
import { OVERVIEW } from './Overview';
import { QUESTION } from './Question';
import { TERM } from './Term';

const app = new Hono();

async function createHTML({ body, styleTags }: { body: string; styleTags: string }): Promise<string> {
  const htmlContent = await fs.readFile(INDEX_HTML_PATH, 'utf-8');

  const content = htmlContent
    .replaceAll('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replaceAll('<style id="tag"></style>', styleTags)
    .replaceAll(
      '<script id="inject-data-term-text" type="application/json"></script>',
      `<script id="inject-data-term-text" type="application/json">${TERM}</script>`,
    )
    .replaceAll(
      '<script id="inject-data-contact-text" type="application/json"></script>',
      `<script id="inject-data-contact-text" type="application/json">${CONTACT}</script>`,
    )
    .replaceAll(
      '<script id="inject-data-question-text" type="application/json"></script>',
      `<script id="inject-data-question-text" type="application/json">${QUESTION}</script>`,
    )
    .replaceAll(
      '<script id="inject-data-company-text" type="application/json"></script>',
      `<script id="inject-data-company-text" type="application/json">${COMPANY}</script>`,
    )
    .replaceAll(
      '<script id="inject-data-overview-text" type="application/json"></script>',
      `<script id="inject-data-overview-text" type="application/json">${OVERVIEW}</script>`,
    );

  return content;
}

app.get('*', async (c) => {
  const sheet = new ServerStyleSheet();

  try {
    const body = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={c.req.path}>
          <ClientApp />
        </StaticRouter>,
      ),
    );

    const styleTags = sheet.getStyleTags();
    const html = await createHTML({ body, styleTags });

    return c.html(html);
  } catch (cause) {
    throw new HTTPException(500, { cause, message: 'SSR error.' });
  } finally {
    sheet.seal();
  }
});

export { app as ssrApp };
