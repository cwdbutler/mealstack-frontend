import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import PlanDisplayer from './components/PlanDisplayer/PlanDisplayer';
import Search from './components/Search/Search';
import PlanCreator from './components/PlanCreator/PlanCreator';
import NotFound from './components/NotFound';
import './App.css';
import { Flex, Spacer, Box, Button, Heading } from '@chakra-ui/react';
import RecipeFilter from './components/RecipeCreator/RecipeFilter';

export default function App() {
  return (
    <Router>
      <Flex p="2" bg="green.200">
        <Box p="2">
          <Heading size="md">Mealstack</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button mr="2" as={Link} to="/">
            Home
          </Button>
          <Button mr="2" as={Link} to="/recipes">
            Recipes
          </Button>
          <Button mr="2" as={Link} to="/plan/all">
            Plans
          </Button>
          <Button mr="2" as={Link} to="/plan-creator">
            Make Me a Plan
          </Button>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan/:id" element={<PlanInfo />} />
        <Route path="/plan/all" element={<PlanDisplayer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes" element={<RecipeFilter />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/plan-creator" exact element={<PlanCreator />} />
      </Routes>
    </Router>
  );
}