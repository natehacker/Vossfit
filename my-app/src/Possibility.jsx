import React from 'react';
import './Possibility.css';
import Thetech from "./components/assests/Thetech.png"

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
    <img src={Thetech} alt ="tech"/>
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Understanding The Technology <br />behind Voss-Fitness</h1>
      <p>Y.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;