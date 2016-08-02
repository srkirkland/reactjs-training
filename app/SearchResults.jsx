import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    if (this.props.data.length === 0) {
      return <h3>No data</h3>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>building</th>
            <th>room</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map( (nam) => {
            return (
              <tr key={nam.id}>
                <td>{nam.building}</td>
                <td>{nam.room}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
