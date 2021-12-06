import { Center, Box, Stack, Divider } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import GitHubLoginForm from './GitHubLoginForm';

export default function NotFound() {
  return (
    <Center h="100%" w="100%">
      <Box>
        <Heading as="h1" size="2xl" mb={10}>
          Login page
        </Heading>
        <Stack spacing={6}>
          <LoginForm />
          <Divider />
          <GitHubLoginForm />
        </Stack>
      </Box>
    </Center>
  );
}
