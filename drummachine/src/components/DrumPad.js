import React, { Component } from 'react'
import Pads from './Pads'

export class DrumPad extends Component {
    render() {
        return (this.props.items.map(item =>(
        <Pads 
        keyCode={item.keyCode} 
        title={item.keyTrigger}
        playAudio={this.props.playAudio}/>)));
        }
        
    
}

export default DrumPad
