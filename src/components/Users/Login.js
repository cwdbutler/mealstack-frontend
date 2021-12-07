import { Center, Box, Stack } from '@chakra-ui/layout';
import GitHubLoginForm from './GitHubLoginForm';

export default function Login() {
  return (
    <Center h="100%" w="100%">
      <Box
        boxShadow="md"
        p={10}
        borderRadius="lg"
        border="1px"
        borderColor="gray.100"
      >
        <Stack spacing={6}>
          <GitHubLoginForm />
        </Stack>
      </Box>
    </Center>
  );
}
