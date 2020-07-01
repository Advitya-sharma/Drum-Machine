import "./App.css";
import React, { Component } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/display/Display";
import Contact from "./components/Contact";

export class App extends Component {
  state = {
    audioKit: [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ],
    display: "☠ ☠ ☠"
  };
  playAudio = keyCode => {
    const object = this.state.audioKit.filter(
      item => item.keyCode === keyCode
    )[0];
    const audio = new Audio(object.url);
    const display = object.id;
    this.setState({ display: display });
    audio.play();
  };

  render() {
    return (
      <div>
        <Contact />
        <div id="drum-machine">
          <div id="drum-pad">
            <DrumPad items={this.state.audioKit} playAudio={this.playAudio} />
          </div>
          <Display text={this.state.display} />
        </div>
      </div>
    );
  }
}

export default App;
