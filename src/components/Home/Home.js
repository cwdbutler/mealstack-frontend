import { Box, Center, HStack } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import SearchForm from './SearchForm';

export default function Home() {
  return (
    <Center h="100%" w="100%">
      <HStack spacing={20}>
        <Heading as="h1" size="2xl">
          Find your Mealstack...
        </Heading>
        <Box boxShadow="lg" p={10} borderRadius="lg">
          <SearchForm />
        </Box>
      </HStack>
    </Center>
  );
}
