import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='top__footer'>
        <h4>Nigeria</h4>
      </div>
      <hr />
      <div className='bottom__footer'>
        <div className='left__bottom_nav footer'>
          <nav>
            <a href='/'>About</a>
            <a href='/'>Advertising</a>
            <a href='/'>Business</a>
            <a href='/'>How search works</a>
          </nav>
        </div>
        <div className='middle__bottom_nav  footer'>
          <p>Carbon neutral since 2007</p>
        </div>
        <div className='right__bottom_nav  footer'>
          <nav>
            <a href='/'>About</a>
            <a href='/'>Advertising</a>
            <a href='/'>Business</a>
            <a href='/'>How search works</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
