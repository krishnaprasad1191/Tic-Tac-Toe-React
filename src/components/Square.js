import React, { Component } from 'react';
import './Square.css';
import cross from '../Vectors/cross.svg';
import circle from '../Vectors/circle.svg';
import nil from '../Vectors/null.png';

import Ripples from 'react-ripples';

class Square extends Component {
    symbol(){
        if(this.props.value == 'X')
            return cross;
        else if(this.props.value == 'O')
            return circle;
        else
            return nil;
    }
    render() {
        return (
            <div className='Square-button' onClick={() => this.props.onClick()}>
                {/* {this.props.value} */}
               <img src= {this.symbol()} alt=""/>
            </div>
        );
    }
}

export default Square;