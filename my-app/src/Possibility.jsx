import React from 'react';
// import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';
import Thetech from "./components/assests/Thetech.png"

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
    <img src={Thetech} />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Understanding The Technology <br />behind Voss-Fitness</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;