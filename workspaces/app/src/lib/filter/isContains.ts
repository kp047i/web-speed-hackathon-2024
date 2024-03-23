type Params = {
  query: string;
  target: string;
};

function normalizeString(str: string) {
  // NFKC正規化で、ひらがな・カタカナ・半角・全角の区別を緩和する
  return str.normalize('NFKC');
}

export function isContains({ query, target }: Params) {
  // クエリとターゲット文字列を正規化
  const normalizedQuery = normalizeString(query);
  const normalizedTarget = normalizeString(target);

  // 正規化した文字列での検索を行う
  return normalizedTarget.indexOf(normalizedQuery) !== -1;
}
