import './App.css';
import { Header } from './components/Header/Header'
import { Liked } from './components/Liked/Liked'
import { Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { Homepage } from './components/Homepage/Homepage';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Library } from './components/Library/Library';
function App() {
  // let currentClass = 'main-outer-div'
  // if(path!== '/'){
  //   currentClass = " dynamic-class"
  // }
  // else{
  //   currentClass = "main-outer-div"
  // }

  return (
    <div className="main-outer-div">
      <div className="header"><Header /></div>
      <div className="sidebar"><Sidebar /></div>

      <Routes>
        <Route path='/' element={<div className="main"><Homepage /></div>} />
        <Route path='/liked' element={<div className="main"><Liked /></div>} />
        <Route path="watch/:id" element={<div className="main"><VideoPlayer /></div>} />
        <Route path='library' element={<div className="main"><Library /></div>} />
      </Routes>

    </div>
  );
}

export default App;
