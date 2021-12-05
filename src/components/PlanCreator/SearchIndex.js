import { Center, Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import Plan from '../Search/Plan';

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
        <Box>
          <Heading mt={20} textAlign="center" size="xl">
            We couldn't find any plans with those filters
          </Heading>
          <Heading mt={10} textAlign="center" size="lg" color="gray.600">
            Try altering your search parameters
          </Heading>
        </Box>
      )}
    </Center>
  );
}

export default SearchIndex;
