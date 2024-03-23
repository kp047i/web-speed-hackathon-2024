import { Suspense } from 'react';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Loading } from '../../../foundation/components/Loading';
import { Space } from '../../../foundation/styles/variables';
import { getDayOfWeekStr } from '../../../lib/date/getDayOfWeekStr';
import { useRelease } from '../../release/hooks/useRelease';

import { BookCard } from './BookCard';

const BookCardList = () => {
  const nowInJapan = new Date(new Date().getTime() + 9 * 60 * 60 * 1000); // UTC+9
  const todayStr = getDayOfWeekStr(nowInJapan);
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });

  return (
    <Flex align="stretch" gap={Space * 2} justify="flex-start">
      {release?.books?.map((book) => <BookCard key={book.id} book={book} />)}
    </Flex>
  );
};

const BookCardListWithSuspense = () => {
  return (
    <Box height={244}>
      <Flex align="stretch" gap={Space * 2} justify="flex-start">
        <Suspense fallback={<Loading />}>
          <BookCardList />
        </Suspense>
      </Flex>
    </Box>
  );
};

export { BookCardListWithSuspense as BookCardList };
