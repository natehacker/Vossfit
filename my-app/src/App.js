import React, { useState, useEffect } from 'react';
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
import Signin from './components/Signin';

import axios from "axios"



const App = () => {
const [signUps, setsignUps]= useState()


  async function getAllSignUps (){
    let res = await axios.get("http://localhost:3001/auth/")
    console.log(res.data)
    console.log(signUps)
  }

  useEffect(() => {
    getAllSignUps()
  }, [])
return (
  <div className="App">
    <div className="gradient__bg">
     <Navbar/>
      <Routes>
        <Route exact path ="/activewear" element={<Activewear/>}/>
        <Route exact path ="/Signup" element={<SignUp/>}/>
        <Route exact path ="/Signin" element={<Signin/>}/>
        <Route exact path ="/Blog" element={<Blog/>}/>
         <Route exact path ="/" element={<Home/>}/> 
      </Routes> 
<Footer/>

      
      </div>
  </div>
)};

export default App;