import { useSetAtom } from 'jotai';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { DialogContentAtom } from '../../atoms/DialogContentAtom';
import { Color, Space } from '../../styles/variables';
import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Loading } from '../Loading';

const TermDialog = lazy(() => import('./TermDialog'));
const ContactDialog = lazy(() => import('./ContactDialog'));
const QuestionDialog = lazy(() => import('./QuestionDialog'));
const CompanyDialog = lazy(() => import('./CompanyDialog'));
const OverviewDialog = lazy(() => import('./OverviewDialog'));

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;

export const Footer: React.FC = () => {
  console.log('Footer');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const updateDialogContent = useSetAtom(DialogContentAtom);

  const handleRequestToTermDialogOpen = async () => {
    // const Term = document.getElementById('inject-data-term-text')?.textContent;
    updateDialogContent(
      <Suspense fallback={<Loading />}>
        <TermDialog />
      </Suspense>,
    );
  };

  const handleRequestToContactDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={<Loading />}>
        <ContactDialog />
      </Suspense>,
    );
  };

  const handleRequestToQuestionDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={<Loading />}>
        <QuestionDialog />
      </Suspense>,
    );
  };

  const handleRequestToCompanyDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={<Loading />}>
        <CompanyDialog />
      </Suspense>,
    );
  };

  const handleRequestToOverviewDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={<Loading />}>
        <OverviewDialog />
      </Suspense>,
    );
  };

  return (
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" height={45} src="/assets/cyber-toon.svg" />
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <_Button disabled={!isClient} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </_Button>
        </Flex>
      </Flex>
    </Box>
  );
};
