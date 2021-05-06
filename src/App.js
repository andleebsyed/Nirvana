import './App.css';
import { Header } from './components/Header/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { Homepage } from './components/Homepage/Homepage';
function App() {
  return (
    <div className>
      <div className="header"><Header /></div>
      <Routes>
        <Route path='/' element={<div><Homepage /></div>} />
        <Route path="watch/:id" element={<div className=""><VideoPlayer /></div>} />
      </Routes>
    </div>
  );
}

export default App;
