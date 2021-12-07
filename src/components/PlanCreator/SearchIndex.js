import { Center, Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import Plan from '../Search/Plan';

function SearchIndex({ plan }) {
  // if (plan.error) {
  //   return (
  //     <Center mt={5}>
  //       <Heading mt={20}>
  //         {'Sorry, there seems to be a server error 🙁'}
  //       </Heading>
  //     </Center>
  //   );
  // }

  return (
    <Center mt={5}>
      {plan != null ? (
        <Plan plan={plan} key={plan.id} />
      ) : (
        <Box>
          <Heading mt={20} textAlign="center" size="xl">
            Enter your macros and hit submit so we can generate a plan for you!
          </Heading>
          {/* <Heading mt={10} textAlign="center" size="lg" color="gray.600">
            Try altering your search parameters
          </Heading> */}
        </Box>
      )}
    </Center>
  );
}

export default SearchIndex;
