import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var availablePlaces = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var newPlace = [];

class Score extends React.Component {
	render(){
		return(
			<p className="score">Score : {this.props.score}</p>
		);
	}
}

class Square extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		value: props.value,
  		isEmpty: props.isEmpty,
  	}
  }
  render() {
    return (
      <button className="square" onClick={() => 
      	  this.setState({value: parseInt(this.state.value, 10) * 2, isEmpty: 0})}>
        {newPlace.indexOf(parseInt(this.state.value, 10)) !== -1 ? Math.floor(Math.random() * 2) + 1 : ""}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} isEmpty="0"/>;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
  	var tmp = Math.floor(Math.random() * availablePlaces.length);
  	newPlace.push(availablePlaces.splice(tmp,1)[0]);
  	tmp = Math.floor(Math.random() * availablePlaces.length);
  	newPlace.push(availablePlaces.splice(tmp,1)[0]);
    return (
      <div className="game">
        <div className="game-board">
	  	  <div className="game-info">
	        {/* < Score score="10"/ > */}
          </div>
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
