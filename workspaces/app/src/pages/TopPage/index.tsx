import { Suspense, useId } from 'react';

import { BookCardList } from '../../features/book/components/BookCardList';
import { FeatureCardList } from '../../features/feature/components/FeatureCardList';
import { RankingCardList } from '../../features/ranking/components/RankingCardList';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Loading } from '../../foundation/components/Loading';
import { Spacer } from '../../foundation/components/Spacer';
import { Text } from '../../foundation/components/Text';
import { Color, Space, Typography } from '../../foundation/styles/variables';

import { CoverSection } from './internal/CoverSection';

const TopPage: React.FC = () => {
  const pickupA11yId = useId();
  const rankingA11yId = useId();
  const todayA11yId = useId();

  return (
    <Box as="main" maxWidth="100%" width="100%">
      <Box aria-labelledby={pickupA11yId} as="section" maxWidth="100%" mt={16} width="100%">
        <Text as="h2" color={Color.MONO_100} id={pickupA11yId} typography={Typography.NORMAL20} weight="bold">
          ピックアップ
        </Text>
        <Spacer height={Space * 2} />

        <Box height={212}>
          <Suspense fallback={<Loading />}>
            <FeatureCardList />
          </Suspense>
        </Box>
      </Box>

      <Spacer height={Space * 2} />

      <Box aria-labelledby={rankingA11yId} as="section" maxWidth="100%" width="100%">
        <Text as="h2" color={Color.MONO_100} id={rankingA11yId} typography={Typography.NORMAL20} weight="bold">
          ランキング
        </Text>
        <Spacer height={Space * 2} />
        <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
          <RankingCardList />
        </Box>
      </Box>

      <Spacer height={Space * 2} />

      <Box aria-labelledby={todayA11yId} as="section" maxWidth="100%" width="100%">
        <Text as="h2" color={Color.MONO_100} id={todayA11yId} typography={Typography.NORMAL20} weight="bold">
          本日更新
        </Text>
        <Spacer height={Space * 2} />
        <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
          <BookCardList />
        </Box>
      </Box>
    </Box>
  );
};

const TopPageWithSuspense: React.FC = () => {
  return (
    <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
      <Box as="header" maxWidth="100%" width="100%">
        <CoverSection />
      </Box>
      <TopPage />
    </Flex>
  );
};

export { TopPageWithSuspense as TopPage };
