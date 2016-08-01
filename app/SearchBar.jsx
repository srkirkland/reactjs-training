import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="well well-sm">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
