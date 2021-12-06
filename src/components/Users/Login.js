import { Center, Box } from '@chakra-ui/layout';
import { Heading, Button } from '@chakra-ui/react';
import LoginForm from './LoginForm';

export default function NotFound() {
  return (
    <Center h="100%" w="100%">
      <Box>
        <Heading as="h1" size="2xl" mb={10}>
          Login page
        </Heading>
        <Center>
          <LoginForm />
        </Center>
      </Box>
    </Center>
  );
}
