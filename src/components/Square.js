import React, { Component } from 'react';
import './Square.css';
import cross from '../Vectors/cross.svg';
import circle from '../Vectors/circle.svg';
import nil from '../Vectors/null.png';


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
               <img src= {this.symbol()} alt=""/>
            </div>
        );
    }
}   

export default Square;