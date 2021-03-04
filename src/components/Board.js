import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
    // constructor(props){
    //     super(props);
    //     this.props.state = {
    //         squares: Array(9).fill(null),
    //         XisNext: true,
    //         gameOver: false,
    //         filled: 0
    //     }
    // }
    calculateWinner(squaresCopy){
        
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        //console.log(squaresCopy);
        for(let i=0; i<=7; i++){
            if(squaresCopy[win[i][0]]){ //console.log(i+'-'+squaresCopy[win[i][0]]+squaresCopy[win[i][1]]+squaresCopy[win[i][2]])             
                if((squaresCopy[win[i][0]] === squaresCopy[win[i][1]]) && (squaresCopy[win[i][1]] === squaresCopy[win[i][2]])){
                    this.props.state.gameOver = true;
                    return ("Player '"+squaresCopy[win[i][0]]+"' is the Winner!");
                } 
            }        
        }
        if(this.props.state.filled === 9){
            this.props.state.gameOver = true;
            return ('Game is tied!')
        }
        
    }
    handleClick(i){
        //alert("click is handled!");
        const squaresCopy = this.props.state.squares.slice();
        if(!this.props.state.gameOver && !squaresCopy[i-1]){
            this.props.state.filled++;
            if(this.props.state.XisNext){
                squaresCopy[i-1] = 'X';
                let x = this.calculateWinner(squaresCopy);
                if(x) 
                    this.props.status(x);
                else 
                    this.props.status("Player 'O' is next");
            }
            else{
                squaresCopy[i-1] = 'O';
                let x = this.calculateWinner(squaresCopy);
                if(x) 
                    this.props.status(x);
                else 
                    this.props.status("Player 'X' is next");
            }
            
            // this.setState({
            //     squares: squaresCopy,
            //     XisNext: !this.props.state.XisNext
            //  });
            
            this.props.state.squares = squaresCopy;
            this.props.state.XisNext = !this.props.state.XisNext;

            this.props.changeHistory(squaresCopy,this.props.state.XisNext,this.props.state.gameOver,this.props.state.filled, this.props.state.status);

        }
            
        
    }
    renderSquare(i){
        return(
            <Square value={this.props.state.squares[i-1]} 
                    onClick={() => this.handleClick(i)}
            />
        );
    }
    render() {
        return (
            <div className='Board-board'>
                <div className='Board-row'>
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className='Board-row'>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className='Board-row'>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

export default Board;