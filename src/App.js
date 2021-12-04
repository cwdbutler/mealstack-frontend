import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import Search from './components/Search/Search';
import NotFound from './components/NotFound';
import './App.css';
import { Flex, Spacer, Box, Button, Heading } from '@chakra-ui/react';

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
          <Button mr="2" as={Link} to="/plan">
            Plan
          </Button>
          <Button as={Link} to="/search">
            Search
          </Button>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
