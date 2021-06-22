import React, { Component } from 'react';
import './Move.css'

class Move extends Component {
    render() {
        return (
            <div className='Move-button' onClick={() => this.props.onClick(this.props.value)}>
                <p>{this.props.value ? "Move #"+(this.props.value) : "Go to start"}</p>
            </div>
        );
    }
}

export default Move;