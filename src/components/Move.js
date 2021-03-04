import React, { Component } from 'react';
import './Move.css'

class Move extends Component {
    render() {
        return (
            <div className='Move-button' onClick={() => this.props.onClick(this.props.value)}>
                <p>{"Move #"+(this.props.value + 1)}</p>
            </div>
        );
    }
}

export default Move;