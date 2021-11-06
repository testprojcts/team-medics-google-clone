import React, { useState } from 'react';
import './MainPage.css';
import logo from '../logo.png';
import './responsive.css';

const MainPage = () => {
  // default item in memory
  const [textEntered, setTextEntered] = useState('');

  const textHandler = (e) => {
    setTextEntered(e.target.value);
  };

  return (
    <div className='mainPage'>
      <div className='content__wrapper'>
        {textEntered ? (
          <p className='edited__text'>{textEntered}</p>
        ) : (
          <img src={logo} alt='side hustle logo' className='logo' />
        )}
        <div className='input__wrapper'>
          <input
            type='text'
            placeholder='Enter something meaningful'
            className='searchInput'
            onChange={textHandler}
          />
        </div>
        <div className='mainBtn'>
          <button className='bottomBtn'>Google Search</button>
          <button className='bottomBtn'>I'm Feeling Lucky</button>
        </div>
        <div className='paragragh__container'>
          <p className='main__p'>
            Google offered in:
            <span>
              <a href='/'>Hausa</a>
              <a href='/'>Igbo</a>
              <a href='/'>Èdè Yorùbá</a>
              <a href='/'>Nigerian Pidgin</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
