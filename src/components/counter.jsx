import React, { Component } from "react"; //impc

class Counter extends Component {
  //cc
  state = {
    count: 0
  };

  render() {
    React.createElement("h1");
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
