import React, { Component } from "react";

export class pads extends Component {
  render() {
    const { title, keyCode } = this.props;
    return (
      <div
        className="pad-item"
        style={padStyle}
        onClick={this.props.playAudio.bind(this, keyCode)}
      >
        {title}
      </div>
    );
  }
}

const padStyle = {
  backgroundColor: "pink",
  textAlign: "center",
  borderRadius: "10px",
  border: "3px solid black"
};

export default pads;
