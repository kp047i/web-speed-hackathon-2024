type Params = {
  query: string;
  target: string;
};

function normalizeString(str: string) {
  // NFKC正規化で、ひらがな・カタカナ・半角・全角の区別を緩和する
  return str.normalize('NFKC');
}

function hiraganaToKatakana(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, (match) => String.fromCharCode(match.charCodeAt(0) + 0x60));
}

export function isContains({ query, target }: Params) {
  const normalizedQuery = normalizeString(hiraganaToKatakana(query));
  const normalizedTarget = normalizeString(hiraganaToKatakana(target));

  // 正規化した文字列での検索を行う
  return normalizedTarget.indexOf(normalizedQuery) !== -1;
}
