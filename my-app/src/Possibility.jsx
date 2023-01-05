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
      <p>When it comes to innovative sportswear and supplementation Voss fitness has outdone its competition on numerous 
        accounts we have sold more products for health than GNC. However, this was no easy accomplishment our company 
        prides itself on using advanced technology to 
        make sure we supply the right products that give our athletes a leading edge on the field </p>
    </div>
  </div>
);

export default Possibility;