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
  		name: props.name,
  	}
  }
  render() {
    return (
      <button className="square" id={'p_' + this.state.name}>
        <div id={'c_' + this.state.name} className={parseInt(this.state.value, 10) !== 0 ? 'hasval': ''}>
        	{parseInt(this.state.value, 10) !== 0 ? this.state.value : ""}
        </div>
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i, x, y) {
    return <Square value={i} name={x.toString() + y.toString()}/>;
  }

  renderRow(i) {
  	return (
      <div className="board-row" key={i}>
        {this.renderSquare(values[i][0], i, 0)}
        {this.renderSquare(values[i][1], i, 1)}
        {this.renderSquare(values[i][2], i, 2)}
        {this.renderSquare(values[i][3], i, 3)}
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
  
  constructor(props) {
    super(props)
    function checkKey(e) {
	    var event = window.event ? window.event : e;
	    if (event.keyCode === 37) { // Left Key
	    	console.log("Left");
	    }
	    if (event.keyCode === 38) { // Up Key
	    	console.log("Up");
	    }
	    if (event.keyCode === 39) { // Right Key
	    	console.log("Right");
	    }
	    if (event.keyCode === 40) { // Down Key
	    	console.log("Down");
	    }
	}

	document.onkeydown = checkKey;
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      cursor: 0,
      result: []
    }
  }

  handleKeyDown(e) {
    const { cursor, result } = this.state
    // arrow up/down button should select next/previous list element
    if (e.key === 38 && cursor > 0) {
        console.log("UP")
    } else if (e.key === 40 && cursor < result.length - 1) {
      console.log("Down")
    }
  }

  render() {
  	// 1st value on game start
  	var tmp = Math.floor(Math.random() * availablePlaces.length);
  	var i = availablePlaces.splice(tmp,1)[0];
  	values[parseInt(i/10, 10)][i%10] = Math.floor(Math.random() * 2) + 1;
  	// 2nd value on game start
  	tmp = Math.floor(Math.random() * availablePlaces.length);
  	i = availablePlaces.splice(tmp,1)[0];
  	values[parseInt(i/10, 10)][i%10] = Math.floor(Math.random() * 2) + 1;

    return (
      <div className="game" onKeyDown = { this.handleKeyDown } tabIndex="0">
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
