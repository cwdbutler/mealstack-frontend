import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import Search from './components/Search/Search';
import RecipeDisplayer from './components/RecipeDisplayer/RecipeDisplayer';
import './App.css';
import { Flex, Spacer, Box, Button, Heading } from '@chakra-ui/react';
import RecipeFilter from './components/RecipeDisplayer/RecipeFilter';
import PlanCreator from './components/RecipeDisplayer/PlanCreator';

export default function App() {
  return (
    <Router>
      <>
        <Flex p="2" bg="green.200">
          <Box p="2">
            <Heading size="md">Mealstack</Heading>
          </Box>
          <Spacer />
          <Box>
            <Link to="/home">
              <Button mr="2">Home</Button>
            </Link>
            <Link to="/recipes">
              <Button mr="2">Recipes</Button>
            </Link>
            <Link to="/search">
              <Button mr="2">Plans</Button>
            </Link>
            {/* <Link to="/plan/new">
              <Button mr="2">Create a plan</Button>
            </Link> */}
          </Box>
        </Flex>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/plan/:id" exact element={<PlanInfo />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/recipes" exact element={<RecipeFilter />} />
          {/* <Route path="/plan/new" exact element={<PlanCreator />} /> */}
        </Routes>
      </>
    </Router>
  );
}
