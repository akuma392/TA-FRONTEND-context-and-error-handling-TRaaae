import React from 'react';
import Header from './Header';
import Main from './Main';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallBack({ error }) {
  console.log(error, 'Error fall back');
  return (
    <div>
      <p>Something went wrong:{error}</p>
    </div>
  );
}

class App extends React.Component {
  // state = {
  //   isDarkMode: false,
  // };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
