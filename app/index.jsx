import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    fetch('index.jsx').then((data)=>{
      console.log(data);
    });
  }
  render () {
    return (
      <div>
        <p> Hello AppDev!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
