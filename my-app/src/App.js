import React from 'react';
 import Footer from "./components/containers/Footer"
 import Header from './components/containers/Header';
 import Possibility from './Possibility';
import Blog from "./components/containers/Blog"
import Activewear from './components/Activewear';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/containers/Home"
import './App.css';
import SignUp from './components/containers/SignUp';




const App = () => (
  <div className="App">
    <div className="gradient__bg">
     <Navbar/>
      <Routes>
        <Route exact path ="/activewear" element={<Activewear/>}/>
        <Route exact path ="/Signup" element={<SignUp/>}/>
         <Route exact path ="/" element={<Home/>}/> 
      </Routes> 
<Footer/>

      
      </div>
  </div>
);

export default App;