import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
