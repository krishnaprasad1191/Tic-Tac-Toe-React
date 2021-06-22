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
      status: "Player 'X' is first",
      moveID: -1,
      //information upto here contains the currect state information 
      history: [
        // {
          // id: 0,
          // squares: Array(9).fill(null),
          // XisNext: true,
          // gameOver: false,
          // filled: 0,
          // status: "Player 'X' is first"
        // }
      ]
      
    }
}
  handleMoveCLick(moveIndex){
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
    this.state.history = this.state.history.slice(0,currentMoveIndex+1);// (0,currentMoveIndex+1) is used for slicing the history when you change previous moves
    let l=this.state.history.length;
    let element = {
      id: l,
      squares: arr,
      XisNext: boolX,
      gameOver: boolG,
      filled: filled,
      status: status
    }
    if(l != 0){
      this.state.history.push(element);
      this.state.moveID++;
    }
    else{
      let element1 = {
        id: 0,
        squares: Array(9).fill(null),
        XisNext: true,
        gameOver: false,
        filled: 0,
        status: "Player 'X' is first"
      }
      element.id = 1;
      this.state.history.push(element1);
      this.state.history.push(element);
      console.log("after - "+this.state.history.length);
      this.state.moveID = this.state.moveID + 2;
    }
    this.forceUpdate();
  }
  statusText(status){
    this.state.status = status;
  }
  
  render(){
    return(
      <div className="App-container">
        <div className="App-boardView">
          
          <Board status={(str) => this.statusText(str)} changeHistory={(arr,boolX,boolG,filled,status) => this.changeHistory(arr,boolX,boolG,filled,status)} state={this.state}/>
        </div>
        <div className="App-moveView">
          <div className="App-status">
          <div>{
            this.state.status

          }</div>
          </div>
          {this.state.history.map((item) => {
            return  <Move onClick={(ID) => this.handleMoveCLick(ID)} key={item.id} value={item.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;