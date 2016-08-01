import React from 'react';
import { render } from 'react-dom';

class Name extends React.Component {
  render() {
    return (
      <span>AppDev (from component)!</span>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello <Name /></p>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
