import { Center } from '@chakra-ui/layout';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { userContext } from '../../Context';

export default function LoginSucess() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();

  if (!user) {
    navigate(-1, { replace: true });
  }

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
      </Alert>
    </Center>
  );
}
