import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newsletter from './components/newsletter';
import Test from "./components/mainpage.tsx";
import Blaze from './components/Landing/blaze';
import Login from './components/Auth/login';
import SignUp from "./components/Auth/signup";
import PrivateRoute from './components/privateroute.tsx'; // Import PrivateRoute
import PostHogPageViewTracker from './components/postHogPageViewTracker';

function App() {
  return (
    <>
      <Router>
        <PostHogPageViewTracker />
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route 
            path="/mainpage" 
            element={
              <PrivateRoute>
                <Test />
              </PrivateRoute>
            } 
          />
          <Route path="/home" element={<Blaze />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;