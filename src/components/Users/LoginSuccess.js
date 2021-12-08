import { Center } from '@chakra-ui/layout';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function LoginSucess() {
  return (
    <Center h="100%" w="100%">
      <Alert
        status="success"
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
          Success!
        </AlertTitle>
        <AlertDescription fontSize="lg" maxWidth="sm">
          Sending you back...
        </AlertDescription>
      </Alert>
    </Center>
  );
}
