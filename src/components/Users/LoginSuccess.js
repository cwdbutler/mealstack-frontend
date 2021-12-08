import { Center } from '@chakra-ui/layout';
import { Alert, AlertIcon, AlertTitle, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { userContext } from '../../Context';

export default function LoginSucess() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  console.log('user in loginsucess:', user);

  const goToPreviousPath = () => {
    console.log('navigating with state:', user);
    navigate(-1, { state: user });
  };

  // redirect !user

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
        <Button mt={30} onClick={goToPreviousPath}>
          Go back
        </Button>
      </Alert>
    </Center>
  );
}
