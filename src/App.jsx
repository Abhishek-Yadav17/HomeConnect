import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Properties from './pages/Properties';
import InteriorDesign from './pages/InteriorDesign';
import Admins from './pages/Admins';
import Login from './pages/Login';
import Bank from './pages/Bank';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/admin" element={<Admins />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
