import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/leaderboard';
import Pointshistory from './components/pointshistory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Leaderboard />} />
        <Route path='/pointshistory' element={<Pointshistory />} />
      </Routes>
    </Router>
  );
};

export default App;
