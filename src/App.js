import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PlanInfo from './PlanInfo';

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
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/plan" exact element={<PlanInfo />} />
        </Routes>
      </div>
    </Router>
  );
}
