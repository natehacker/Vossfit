import { Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Protein from './components/Protein';
import Home from "./components/Home"
import Controls from "./controls"

function App() {
  return (
    <div>
       <Nav/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Nav" element={<Nav/>}/>
       </Routes>
    </div>
  );
}

export default App;
