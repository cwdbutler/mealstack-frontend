import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import Search from './components/Search/Search';
import './App.css';
import { Flex, Spacer, Box, Button, Heading } from '@chakra-ui/react';

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
            <Link to="/plan">
              <Button mr="2">Plan</Button>
            </Link>
            <Link to="/search">
              <Button>Search</Button>
            </Link>
          </Box>
        </Flex>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/plan" exact element={<PlanInfo />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </>
    </Router>
  );
}
