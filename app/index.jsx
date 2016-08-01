import React from 'react';
import { render } from 'react-dom';

class Name extends React.Component {
  render() {
    return (
      <span>{this.props.name}!</span>
    );
  }
}

class App extends React.Component {
  render() {
    const name = 'AppDev group';
    return (
      <div>
        <p> Hello <Name name={name} /></p>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
