import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      	  this.setState({value: parseInt(this.state.value) * 2, isEmpty: false})}>
        {this.state.value}
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
    return (
      <div className="game">
        <div className="game-board">
	  	  <div className="game-info">
	        <Score score="10"/>
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
