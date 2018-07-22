import React from 'react';
import Square from './Square';

class Board extends React.Component {

    renderSquare(i) {
        let selected = i == this.props.selectedIndex ? true : false;
        const winner_line = this.props.winner_line;
        if(winner_line){
            for(let wIndex=0; wIndex<winner_line.length; wIndex++){
                if(i==winner_line[wIndex])
                    selected = true;
            }
        }
        return (
            <Square
                key={i}
                value={this.props.squares[i]} 
                selected={selected} 
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        let rows = [];
        let squares = [];
        let size = 3;
        for(let r=0; r<size; r++){
            for(let s=r*size; s<r*size + size ; s++){
                squares.push(this.renderSquare(s));
            }
            rows.push(<div key={r} className="board-row">{squares}</div>);
            squares = [];
        }
        return (
            <div>{rows}</div>
        );
    }
}

export default Board;