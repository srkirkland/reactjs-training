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
  constructor() {
    super();
    this.state = {
      namData: [],
      allNams: [],
      isLoading: true, // starts out loading
    };
  }
  componentDidMount() {
    fetch('/api')
      .then(r => r.json())
      .then(result => {
        this.setState({
          namData: result,
          allNams: result,
          isLoading: false,
        });
      });
  }
  onQuerySubmitted(query) {
    this.setState({ isLoading: true });

    setTimeout(() => {
      const filteredData = this.state.allNams.filter(nam => nam.room === String(query));
      this.setState({ namData: filteredData, isLoading: false });
    }, 1000);
  }
  render() {
    const name = 'AppDev group';

    let searchResults = this.state.isLoading ?
      <span>Loading...</span>
        : <SearchResults data={this.state.namData} />;
    return (
      <div>
        <h1> Hello <Name name={name} /></h1>
        <SearchBar onQuerySubmitted={this.onQuerySubmitted.bind(this)} />
        {searchResults}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
