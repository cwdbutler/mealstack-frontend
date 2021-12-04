import { Center, Box, Flex } from '@chakra-ui/layout';
import { Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1);
  };

  return (
    <Center h="100%" w="100%">
      <Box>
        <Heading as="h1" size="2xl">
          Sorry, that page doesn't exist
        </Heading>
        <Center>
          <Button mt={30} onClick={goToPreviousPath}>
            Go back
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
