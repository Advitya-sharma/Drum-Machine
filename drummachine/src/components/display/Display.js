import React, { Component } from "react";

export class Display extends Component {
  render() {
    return (
      <div id="display">
        <div id="welcome-text">{this.props.text}</div>
        <div id="intro-text">
          Enjoy the <br />
          Drum-Machine🔥
        </div>
      </div>
    );
  }
}

export default Display;
