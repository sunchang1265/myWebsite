import React from 'react';
import Board from './Board';
import './style.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                location: {col: null, row: null},
                highlight_line: []
            }],
            xIsNext: true,
            stepNumber: 0,
            jumpToStep: 0, //After jump to should not allow any move before go back to current step
            order_asec: true
        };
    }

    handleClick(i) {        
        if(this.state.jumpToStep != this.state.stepNumber){
            return; //After jump to should not allow any move before go back to current step
        }
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const xLocation = Math.ceil((i+1)/3);
        const yLocation = (i+1)%3 == 0 ? 3: (i+1)%3;
        this.setState({
            history: history.concat([{
                squares: squares,
                location: {row: xLocation, col: yLocation}
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: this.state.history.length,  
            jumpToStep: this.state.history.length,
            order_asec: this.state.order_asec          
        });
    }

    jumpTo(move) {
        this.setState({
            jumpToStep: move,
            xIsNext: (move % 2) === 0,            
        });
    }

    reverseOrder(){
        this.setState({
            order_asec: !this.state.order_asec
        });
    }

    restart() {
        this.setState({
            history: [{
                squares: Array(9).fill(null),
                location: {col: null, row: null},
                highlight_line: []
            }],
            xIsNext: true,
            stepNumber: 0,
            jumpToStep: 0, //After jump to should not allow any move before go back to current step
            order_asec: true
        })
    }

    render() {
        const history = this.state.history;
        const current = this.state.stepNumber == this.state.jumpToStep ? history[this.state.stepNumber] : history[this.state.jumpToStep];
        const winner_line = calculateWinner(current.squares);

        let moves = history.map((step, move) => {

            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    <label>{'Location: [' + step.location.row + ',' + step.location.col + ']'}</label>
                </li>
            );
        });
        if(this.state.order_asec == false){
            moves.reverse();
        }

        let status;
        let end = false;
        if (winner_line) {
            status = 'Winner: ' + current.squares[winner_line[0]];
            end = true;
        } else if(moves.length <= current.squares.length){
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        } else {
            status = 'DRAW!!!';
            end = true;            
        }
        let selected = (current.location.row - 1) * 3 + (current.location.col -1);
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares} 
                        selectedIndex={selected} 
                        onClick={(i) => this.handleClick(i)} 
                        winner_line = {winner_line}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                    <div><input type="checkbox" onClick={() => this.reverseOrder()}/>reverse</div>
                    {end ? <button onClick={()=>this.restart()}>restart</button> : null}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}

export default Game;