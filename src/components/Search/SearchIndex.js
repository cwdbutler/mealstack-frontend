import { Center, Box } from '@chakra-ui/layout';
import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import Plan from './Plan';

function SearchIndex({ plans }) {
  console.log('plans inside SearchIndex', plans);
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
    return <WrapItem><Plan key={data.id.toString()} plan={data} /></WrapItem>;
  });

  return (
    <Center mt={5}>
      {planList.length > 0 ? (
        <Wrap>{planList}</Wrap>
      ) : (
        <Box>
          <Heading mt={20} textAlign="center" size="xl">
            We couldn't find any plans with those filters
          </Heading>
          <Heading mt={10} textAlign="center" size="lg" color="gray.600">
            Try widening your search parameters
          </Heading>
        </Box>
      )}
    </Center>
  );
}

export default SearchIndex;
