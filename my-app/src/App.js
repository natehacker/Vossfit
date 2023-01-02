import React from 'react';
 import Footer from "./components/containers/Footer"
 import Navbar from "./components/Navbar"
 import Header from './components/containers/Header';
 import Possibility from './Possibility';
import Blog from "./components/containers/Blog"
import SignUp from './components/SignUp';
import './App.css';
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
       <Header />
       <Possibility />
       <Blog/>
        <SignUp/> 
    </div>
    <Footer />
  </div>
);

export default App;