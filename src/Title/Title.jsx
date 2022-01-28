import React, { Component } from 'react';
export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'blue',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          margin: '20px 0',
        }}
      >
        <h1>React Routing Example</h1>
      </div>
    );
  }
}
