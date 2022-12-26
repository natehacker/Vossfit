import React from 'react';
//  import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import WhatVoss from "./components/containers/WhatVoss"
 import Footer from "./components/containers/Footer"
 import Navbar from "./components/Navbar"
 import Header from './components/containers/Header';
 import Possibility from './Possibility';
import Blog from "./components/containers/Blog"
//  import Feature from './components/containers/Feature';
//  import { CTA, Brand, Navbar } from '..';

import './App.css';


const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
       <Header />
       <Possibility />
   
       <Blog/>
       {/* <Feature/> */}
       {/* <WhatVoss/> */}
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility /> */}
    {/* <CTA /> */}
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default App;