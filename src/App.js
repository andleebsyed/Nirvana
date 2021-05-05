import './App.css';
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Main } from './components/Main/Main'
function App() {
  return (
    <div className="main-outer-div">
      <div className="header"><Header /></div>
      <div className="sidebar"><Sidebar /></div>
      <div className="main"><Main /></div>

      <div></div>
    </div>
  );
}

export default App;
