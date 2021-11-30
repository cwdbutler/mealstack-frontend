import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PlanInfo from './PlanInfo';
import Search from './Search';
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <nav className="navbar">
          <span>
            <Link to="/home">
              <button className="navbar-btn" type="button">
                Home
              </button>
            </Link>
          </span>
          <span>
            <Link to="/search">
              <button className="navbar-btn" type="button">
                Search
              </button>
            </Link>
          </span>
          <span>
            <Link to="/plan">
              <button className="navbar-btn" type="button">
                Plan
              </button>
            </Link>
          </span>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/plan" exact element={<PlanInfo />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </>
    </Router>
  );
}
