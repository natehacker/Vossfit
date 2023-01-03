import React, { useState } from 'react';
// import { Link } from "react-router-dom"

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#">Active Wear</a></p>
          <p><a href="#">Deals</a></p>
          <p><a href="#">Brands</a></p>
          <p><a href="#">performance</a></p>
          <p><a href="#">Herb-Life</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <a href='#SignUp'><button type="button">Sign up</button></a>
      
       
        
      </div>
      <div className="gpt3__navbar-menu">
       
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is VossFit</a></p>
            <p><a href="#possibility">Vossey Merch</a></p>
            <p><a href="#features">VossTech</a></p>
            <p><a href="#blog">Rewards</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Navbar;