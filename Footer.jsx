import React from 'react';
import './Footer.css';
import './responsive.css';

const Footer = () => {
  return (
    <footer className='main__footer'>
      <div className='top__footer'>
        <h4>Nigeria</h4>
      </div>
      <hr />
      <div className='bottom__footer'>
        <div className='left__bottom_nav'>
          <nav>
            <a href='/'>About</a>
            <a href='/'>Advertising</a>
            <a href='/'>Business</a>
            <a href='/'>How search works</a>
          </nav>
        </div>
        <div className='right__bottom_nav'>
          <nav>
            <a href='/'>Privacy</a>
            <a href='/'>terms</a>
            <a href='/'>Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
