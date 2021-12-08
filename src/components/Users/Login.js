import { Center, Stack, Heading, Divider } from '@chakra-ui/layout';
import GitHubLoginButton from './GitHubLoginButton';
export default function Login() {
  return (
    <Center w="100%" h="100%">
      <Stack
        spacing={5}
        borderRadius="lg"
        boxShadow="lg"
        p={10}
        py={20}
        border="1px"
        borderColor="gray.100"
      >
        <Heading size="lg" textAlign="center">
          Log In
        </Heading>
        <Divider />
        <GitHubLoginButton />
      </Stack>
    </Center>
  );
}
