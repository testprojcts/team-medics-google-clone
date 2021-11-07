import React, { useState } from 'react';
import './MainPage.css';
import './responsive.css';
import logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

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
          <SearchIcon className='search__icon' />
          <input
            type='text'
            placeholder='Enter something meaningful'
            className='searchInput'
            onChange={textHandler}
          />
          <MicIcon className='mic__icon' />
        </div>
        <div className='mainBtn'>
          <button className='bottomBtn'>Google Search</button>
          <button className='bottomBtn'>I'm Feeling Lucky</button>
        </div>
        <div className='paragragh__container'>
          <p className='main__p'>
            Google offered in:
            <span>
              <a href='#'>Hausa</a>
              <a href='#'>Igbo</a>
              <a href='#'>Èdè Yorùbá</a>
              <a href='#'>Nigerian Pidgin</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
