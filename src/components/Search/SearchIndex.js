import { Center, Box } from '@chakra-ui/layout';
import {
  Heading,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import Plan from './Plan';

function SearchIndex({ plans }) {
  console.log('plans inside SearchIndex', plans);
  if (plans.error) {
    return (
      <Center h="100%" w="100%">
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          width="25%"
          height="25%"
          borderRadius="lg"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="xl">
            Error!
          </AlertTitle>
          <AlertDescription fontSize="lg" maxWidth="sm">
            There appears to be a problem with our server...
          </AlertDescription>
        </Alert>
      </Center>
    );
  }

  const planList = plans.map((data) => {
    return (
      <WrapItem>
        <Plan key={data.id.toString()} plan={data} />
      </WrapItem>
    );
  });

  return (
    <Center mt={5}>
      {planList.length > 0 ? (
        <Wrap justify="space-around">{planList}</Wrap>
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
