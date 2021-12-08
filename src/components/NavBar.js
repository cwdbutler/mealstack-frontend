import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Button, Heading, Image } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import LogoutButton from './Users/LogoutButton';
import defaultPic from '.././assets/default-pic.jpg';
import { useContext } from 'react';
import { userContext } from '../Context';
import GitHubLoginButton from './Users/GitHubLoginButton';

export default function NavBar() {
  const { user } = useContext(userContext);

  return (
    <Flex p="2" bg="green.200">
      <Box p="2">
        <Heading size="md">Mealstack</Heading>
      </Box>
      <Spacer />
      {user && user.error && (
        <Center>
          <Heading as="h5" size="sm" textAlign="center" mr="2">
            ⚠️ Sorry, we are currently experiencing server issues
          </Heading>
        </Center>
      )}
      {user ? (
        <>
          <Center>
            <Heading as="h5" size="sm" textAlign="center" mr="2">
              {user.username}
            </Heading>
          </Center>
          <Image
            src={user.image}
            fallbackSrc={defaultPic}
            alt="GitHub profile pic"
            boxSize="40px"
            objectFit="cover"
            borderRadius="md"
            mr="2"
          />
          <LogoutButton />
          <Button mr="2" as={Link} to="/account">
            Account
          </Button>
        </>
      ) : (
        <GitHubLoginButton />
      )}
      <Box>
        <Button ml="2" mr="2" as={Link} to="/plan-creator">
          Make Me a Plan
        </Button>
        <Button mr="2" as={Link} to="/recipes">
          Recipes
        </Button>
        <Button mr="2" as={Link} to="/plan/all">
          Plans
        </Button>
        <Button mr="2" as={Link} to="/">
          Home
        </Button>
      </Box>
    </Flex>
  );
}
