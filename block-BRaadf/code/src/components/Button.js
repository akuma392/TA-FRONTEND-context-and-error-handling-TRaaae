import React, { useContext } from 'react';

import ThemeContext from './Context';

export default function SwitchButton() {
  const { isDarkMode, changeMode } = useContext(ThemeContext);
  console.log(isDarkMode, changeMode, 'context');

  return (
    <button
      className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={changeMode}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
