import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Space } from '../../../foundation/styles/variables';
import { useFeatureList } from '../hooks/useFeatureList';

import { FeatureCard } from './FeatureCard';

export const FeatureCardList: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });

  return (
    <Box overflowX="scroll" overflowY="hidden">
      <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
        {featureList?.map((feature) => <FeatureCard key={feature.id} book={feature.book} />)}
      </Flex>
    </Box>
  );
};
