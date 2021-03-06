import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PlanInfo from './components/PlanInfo/PlanInfo';
import PlanDisplayer from './components/PlanDisplayer/PlanDisplayer';
import Search from './components/Search/Search';
import PlanCreator from './components/PlanCreator/PlanCreator';
import NotFound from './components/NotFound';
import Login from './components/Users/Login';
import './App.css';
import RecipeFilter from './components/RecipeCreator/RecipeFilter';
import { useContext } from 'react';
import { userContext } from './Context';
import LoginSuccess from './components/Users/LoginSuccess';
import LoginRouter from './components/Users/LoginRouter';
import NavBar from './components/NavBar';
import Dashboard from './components/Users/Dashboard';

export default function App() {
  const { user } = useContext(userContext);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {user && !user.error ? (
          // logged in
          <>
            <Route path="/login" element={<LoginRouter />} />
            <Route path="/login/success" element={<LoginSuccess />} />
            <Route path="/account" element={<Dashboard />} />
          </>
        ) : (
          // not loggedin
          <>
            <Route path="login" element={<LoginRouter />}>
              <Route path="/login/success" element={<LoginSuccess />} />
              <Route index element={<Login />} />
            </Route>
            <Route path="/account" element={<Login />} />
          </>
        )}
        <Route path="/plan/:id" element={<PlanInfo />} />
        <Route path="/plan/all" element={<PlanDisplayer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<RecipeFilter />} />
        <Route path="/generate" element={<PlanCreator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
