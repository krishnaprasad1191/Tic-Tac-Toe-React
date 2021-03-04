import React from 'react';
import './App.css';
import Board from './components/Board'
import Move from './components/Move'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      XisNext: true,
      gameOver: false,
      filled: 0,
      status: "Player 'X' is next",
      history: [],
      moveID: -1
    }
}
  handleMoveCLick(moveIndex){
    // console.log(moveIndex);
    // //this.state.squares = this.state.history[moveIndex].squares;
    // console.log(this.state.squares);
    // console.log('move id - ' +moveIndex);
    this.setState({
      squares: this.state.history[moveIndex].squares,
      XisNext: this.state.history[moveIndex].XisNext,
      gameOver: this.state.history[moveIndex].gameOver,
      filled: this.state.history[moveIndex].filled,
      status: this.state.history[moveIndex].status,
      moveID: moveIndex
    });
  }
  changeHistory(arr,boolX,boolG,filled,status){
    
    let currentMoveIndex = this.state.moveID;
    // console.log(currentMoveIndex);
    // if(currentMoveIndex)
    this.state.history = this.state.history.slice(0,currentMoveIndex+1);
    let l=this.state.history.length;
    let element = {
      id: l,
      squares: arr,
      XisNext: boolX,
      gameOver: boolG,
      filled: filled,
      status: status
    }
    this.state.history.push(element);
    this.state.moveID++;
    // console.log(this.state.history);
    this.forceUpdate();
  }
  // moves(){
  //   let n = this.state.history.length;
  //   console.log(n);
  //   for(let i=0; i<n; i++){
  //     this.renderMove(i);
  //   }
  // }
  // renderMove(i){
  //   console.log('renderMove'+i);
  //   return(
  //     <Move value={i}/>
  //   );
  // }
  statusText(status){
    //alert(status);
    // this.setState({
    //   status: status
    // })
    this.state.status = status;
  }
  changeStatus(XisNext, gameOver){
    if(gameOver){
      if(XisNext)
        return "Player 'o' is Winner!";
      else
        return "Player 'x' is Winner!";
    }
    else{
      if(XisNext)
        return "Player 'x' is next";
      else
        return "Player 'o' is next";
    }

  }
  render(){
    //const status = this.statusText();
    return(
      <div className="App-container">
        <div className="App-boardView">
          <Board status={(str) => this.statusText(str)} changeHistory={(arr,boolX,boolG,filled,status) => this.changeHistory(arr,boolX,boolG,filled,status)} state={this.state}/>
        </div>
        <div className="App-moveView">
          <div className="App-status">
          <div>{
            this.state.status

            // this.state.status = this.state.XisNext ? "Player 'X' is next" : "Player 'O' is next"
            //this.changeStatus(this.state.XisNext, this.state.gameOver)
          }</div>
          </div>
          {/* {this.moves()} */}
          {/* {this.renderMove(10)} */}
          {/* <Move value={2}/> */}
          {/* {console.log(this.state.history)} */}
          {this.state.history.map((item) => {
            return  <Move onClick={(ID) => this.handleMoveCLick(ID)} key={item.id} value={item.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;