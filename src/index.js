import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var availablePlaces = [0, 1, 2, 3,10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32, 33];
var values = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
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
  	}
  }
  render() {
    return (
      <button className="square" onClick={() => 
      	  this.setState({value: parseInt(this.state.value, 10) * 2})}>
        {parseInt(this.state.value, 10) !== 0 ? this.state.value : ""}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  renderRow(i) {
  	return (
      <div className="board-row" key={i}>
        {this.renderSquare(values[i][0])}
        {this.renderSquare(values[i][1])}
        {this.renderSquare(values[i][2])}
        {this.renderSquare(values[i][3])}
      </div>
  	);
  }

  render() {
  	var rows = [];
  	for(var i = 0; i < 4; i++){
  		rows.push(this.renderRow(i))
  	}
    return (
      <div>
        {rows}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
  	var tmp = Math.floor(Math.random() * availablePlaces.length);
  	var i = availablePlaces.splice(tmp,1)[0];
  	console.log("i : " + i);
  	values[parseInt(i/10, 10)][i%10] = Math.floor(Math.random() * 2) + 1;
  	tmp = Math.floor(Math.random() * availablePlaces.length);
  	i = availablePlaces.splice(tmp,1)[0];
  	console.log("i : " + i);
  	values[parseInt(i/10, 10)][i%10] = Math.floor(Math.random() * 2) + 1;
  	console.log(values);
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
