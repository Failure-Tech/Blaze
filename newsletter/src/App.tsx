import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Newsletter from './components/newsletter';
import Test from "./components/test";
import PostHogPageViewTracker from './components/postHogPageViewTracker';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Blaze from './components/Landing/blaze';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <PostHogPageViewTracker />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Newsletter</Link>
            </li>
            <li>
              <Link to="/test">Test Page</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={<Blaze />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;