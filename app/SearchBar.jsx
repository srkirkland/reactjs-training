import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '', //start with no query
    };
  }
  onQueryChange(e) {
    this.setState({ query: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault(); // it's still javascript!

    alert('you asked for ' + this.state.query);
  }
  render() {
    return (
      <div className="well well-sm">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={this.state.query}
              onChange={this.onQueryChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
