import React from 'react';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';

import { ThemeProvider } from './Context';

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    let { changeMode } = this;
    return (
      <ThemeProvider value={{ isDarkMode, changeMode }}>
        <div className={`bg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
          <SwitchButton />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
