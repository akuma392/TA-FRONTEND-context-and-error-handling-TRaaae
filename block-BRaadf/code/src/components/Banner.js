import React from 'react';
import ThemeContext from './Context';

class Banner extends React.Component {
  static contextType = ThemeContext;

  componentDidMount() {
    const isDarkMode = this.context;

    console.log(isDarkMode); // { name: 'Tania', loggedIn: true }
  }

  render() {
    let { isDarkMode } = this.context;
    console.log(isDarkMode, 'banner');
    return (
      <div
        className={
          isDarkMode
            ? 'message-dark message--banner message--success'
            : 'message message--banner message--success'
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;
