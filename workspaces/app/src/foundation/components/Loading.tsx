import { Box } from './Box';
import { Flex } from './Flex';

export const Loading: React.FC = () => {
  return (
    <Box height="100%">
      <Flex align="center" justify="center">
        Loading...
      </Flex>
    </Box>
  );
};
