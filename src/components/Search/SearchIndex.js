import { Box, Center, HStack } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import Plan from './Plan';

function SearchIndex({ plans }) {
  if (plans.error) {
    return (
      <Center mt={5}>
        <Heading mt={20}>
          {'Sorry, there seems to be a server error 🙁'}
        </Heading>
      </Center>
    );
  }

  const planList = plans.map((data) => {
    return <Plan plan={data} key={data.id} />;
  });

  return (
    <Center mt={5}>
      {planList.length > 0 ? (
        planList
      ) : (
        <Heading mt={20}>
          We couldn't find any plans with those filters, try widening your
          search parameters.
        </Heading>
      )}
    </Center>
  );
}

export default SearchIndex;
