import React from 'react';
import { render } from 'react-dom';

import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

const namData = [{ id: 1, building: 'Mrak', room: '38' },
{ id: 2, building: 'Wellman', room: '37' }];

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
        <h1> Hello <Name name={name} /></h1>
        <SearchBar />
        <SearchResults data={namData} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
