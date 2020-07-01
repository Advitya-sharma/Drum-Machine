import React, { Component } from 'react'

export class pads extends Component {
    render() {
        const {title,keyTrigger,display} = this.props;
        return (
            <div style={padStyle} onClick={this.props.playAuido.bind(this,keyTrigger)}>
                {this.props.title}
            </div>
        )
    }
}

const padStyle = {
    class: 'pad-item',
    backgroundColor:'pink',
    textAlign:'center',
    borderRadius:'10px'
}

export default pads
