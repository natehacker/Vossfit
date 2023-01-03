import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">MORE THAN FITNESS</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Join The Team</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Voss-fitness was created as a way to combine technology and fitness all information from this page is free to use, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Socials</h4>
        <p><a href="https://www.linkedin.com/in/nathan-louissaint/">Linked-in</a></p>
        <p><a href="https://github.com/natehacker">Git-Hub</a></p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>2550 Blackmon Decatur, GA 30033</p>
        <p>678-939-5518</p>
        <p>Louissaintmark@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 created by Nathan Marc Louissaint.</p>
    </div>
  </div>
);

export default Footer;