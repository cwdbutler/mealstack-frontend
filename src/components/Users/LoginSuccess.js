import { Center } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function LoginSucess() {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate(-2);
    // sends you back to the page you were on before going to /login
  }, 1000);

  return (
    <Center h="100%" w="100%">
      <Heading as="h1" size="2xl">
        Successfully Logged in
      </Heading>
    </Center>
  );
}
