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
import { myContext } from './Context';

export default function App() {
  const user = useContext(myContext);
  console.log('user in App.js:', user);

  return (
    <Router>
      <Flex p="2" bg="green.200">
        <Box p="2">
          <Heading size="md">Mealstack</Heading>
        </Box>
        <Spacer />
        {user ? (
          <>
            <Center>
              <Heading as="h5" size="sm" textAlign="center" mr="2">
                {user.displayName}
              </Heading>
            </Center>
            <Image
              src={user._json.avatar_url}
              alt="GitHub logo"
              boxSize="40px"
              objectFit="cover"
              borderRadius="md"
              mr="2"
            />
            <Button mr="2">Logout</Button>
          </>
        ) : (
          <Button mr="2">Login</Button>
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
        <Route path="/login" element={<Login />} />
        <Route path="/plan/:id" element={<PlanInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes" element={<RecipeFilter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
