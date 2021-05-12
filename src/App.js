import './App.css';
import { Header } from './components/Header/Header'
import { Liked } from './components/Liked/Liked'
import { Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { Explore } from './components/Explore/Explore';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Library } from './components/Library/Library';
import { Homepage } from './components/Homepage/Homepage';
function App() {
  return (
    <div className="main-outer-div">
      <div className="header"><Header /></div>
      <div className="sidebar"><Sidebar /></div>

      <Routes>
        <Route path="/" element={<div className="main"> <Homepage /></div>} />
        <Route path='/explore' element={<div className="main"><Explore /></div>} />
        <Route path='/liked' element={<div className="main"><Liked /></div>} />
        <Route path="watch/:id" element={<div className="main"><VideoPlayer /></div>} />
        <Route path='library' element={<div className="main"><Library /></div>} />

      </Routes>

    </div>
  );
}

export default App;
