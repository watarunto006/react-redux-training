import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("I'm Clicked") }}></input>
      </React.Fragment>
    )
  }
}

export default App;
