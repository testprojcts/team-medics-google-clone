import React, { useState } from 'react';
import './MainPage.css';
import logo from '././assets/logo.png';

const MainPage = () => {
  // Default state
  const [textEntered, settextEntered] = useState(true);
  const [islogo, setIsLogo] = useState(' ');

  // Defining the textHandler function
  const textHandler = (e) => {
    setIsLogo(e.target.value);
    settextEntered(false);

    // Removing any whitespace if the search box is empty
    if (e.target.value.trim().length === 0) {
      settextEntered(true);
    }
  };

  return (
    <div className='mainPage'>
      <div className='content__wrapper'>
        {/* Checking if the input is true, replace the input texts with the Side Hustle Logo then vice versa */}
        {textEntered ? (
          <img src={logo} alt='side hustle logo' className='logo' />
        ) : (
          <p>{islogo}</p>
        )}
        <div className='input__wrapper'>
          <input
            type='text'
            placeholder='Enter something meaningful'
            className='searchInput'
            onchange={textHandler}
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
