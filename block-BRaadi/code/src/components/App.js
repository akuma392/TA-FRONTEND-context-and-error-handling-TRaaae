import React from 'react';
import Header from './Header';
import Main from './Main';
// import { Error } from 'react-error-boundary';

import Error from './Error';

// function ErrorFallBack({ error }) {
//   console.log(error, 'Error fall back');
//   return (
//     <div>
//       <p>Something went wrong:{error}</p>
//     </div>
//   );
// }

class App extends React.Component {
  // state = {
  //   isDarkMode: false,
  // };
  render() {
    // let { isDarkMode } = this.state;
    return (
      <div>
        <Error>
          <Header isDarkMode={this.state.isDarkMode} />
          <Main isDarkMode={this.state.isDarkMode} />
        </Error>
      </div>
    );
  }
}

export default App;
