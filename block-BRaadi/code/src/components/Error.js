import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log('hello');
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: ${error}`);
    console.log(info);
  }

  render() {
    if (!this.state.hasError) {
      console.log('test');
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default Error;
