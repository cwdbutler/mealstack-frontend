import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PlanInfo from './PlanInfo';
import Search from './Search';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/plan">PlanInfo</Link>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/plan" exact element={<PlanInfo />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}
