import React from 'react';
// import people from '../../assets/people.png';
import Vosstech from '../assests/Vosstech.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">WE ARE MORE THAN FITNESS WE ARE A LIFESTYLE</h1>
      <p>Vossfit Nutrition is a retail company based in Atlanta, Georgia that specializes in health and nutrition-related products, including vitamins, supplements, minerals, herbs, sports nutrition, diet, and energy products</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
     <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        {/* <img src={people} /> */}
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={Vosstech} />
    </div>
  </div>
);

export default Header;