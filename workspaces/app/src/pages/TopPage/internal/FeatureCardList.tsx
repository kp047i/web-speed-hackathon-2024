import _ from 'lodash';

import { FeatureCard } from '../../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../../features/feature/hooks/useFeatureList';
import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Space } from '../../../foundation/styles/variables';

export const FeatureCardList: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });

  return (
    <Box overflowX="scroll" overflowY="hidden">
      <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
        {_.map(featureList, (feature) => (
          <FeatureCard key={feature.id} book={feature.book} />
        ))}
      </Flex>
    </Box>
  );
};
