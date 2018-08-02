import React, { Component } from "react";

export default class TestButton extends Component {
  handleClick = () => {
    console.log('Boo');
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.label}fff
      </button>
      );
  }
}
