import { Suspense } from 'react';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Loading } from '../../../foundation/components/Loading';
import { useRankingList } from '../hooks/useRankingList';

import { RankingCard } from './RankingCard';

const RankingCardList: React.FC = () => {
  const { data: rankingList } = useRankingList({ query: {} });

  return (
    <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
      <Flex align="center" as="ul" direction="column" justify="center">
        {rankingList?.map((ranking) => <RankingCard key={ranking.id} book={ranking.book} />)}
      </Flex>
    </Box>
  );
};

const RankingCardListWithSuspense: React.FC = () => {
  return (
    <Box height={7700} maxWidth="100%" overflowX="hidden" overflowY="hidden">
      <Suspense fallback={<Loading />}>
        <RankingCardList />
      </Suspense>
    </Box>
  );
};

export { RankingCardListWithSuspense as RankingCardList };
