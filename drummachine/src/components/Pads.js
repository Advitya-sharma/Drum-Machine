import React, { Component } from "react";

export class pads extends Component {
  render() {
    const { title, keyCode } = this.props;
    return (
      <div style={padStyle} onClick={this.props.playAudio.bind(this, keyCode)}>
        {title}
      </div>
    );
  }
}

const padStyle = {
  class: "pad-item",
  backgroundColor: "pink",
  textAlign: "center",
  borderRadius: "10px"
};

export default pads;
