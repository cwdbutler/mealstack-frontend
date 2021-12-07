import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import Search from './components/Search/Search';
import NotFound from './components/NotFound';
import Login from './components/Users/Login';
import './App.css';
import { Flex, Spacer, Box, Button, Heading, Image } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import RecipeFilter from './components/RecipeCreator/RecipeFilter';
import { useContext } from 'react';
import { userContext } from './Context';
import LogoutButton from './components/Users/LogoutButton';
import LoginSuccess from './components/Users/LoginSuccess';
import LoginRouter from './components/Users/LoginRouter';

export default function App() {
  const { user } = useContext(userContext);
  return (
    <Router>
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
        {user && !user.error ? (
          <>
            <Center>
              <Heading as="h5" size="sm" textAlign="center" mr="2">
                {user.username}
              </Heading>
            </Center>
            <Image
              src={user.image}
              alt="GitHub logo"
              boxSize="40px"
              objectFit="cover"
              borderRadius="md"
              mr="2"
            />
            <LogoutButton />
          </>
        ) : (
          <Button mr="2" as={Link} to="/login">
            Login
          </Button>
        )}
        <Box>
          <Button mr="2" as={Link} to="/">
            Home
          </Button>
          <Button mr="2" as={Link} to="/recipes">
            Recipes
          </Button>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        {user ? (
          <Route path="login" element={<LoginRouter />} />
        ) : (
          <Route path="login" element={<LoginRouter />}>
            <Route index element={<Login />} />
            <Route path="success" element={<LoginSuccess />} />
          </Route>
        )}
        <Route path="/plan/:id" element={<PlanInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes" element={<RecipeFilter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
