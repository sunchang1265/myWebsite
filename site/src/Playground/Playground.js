import React from 'react';
import Game from './Tictactoe/Game';
import './Playground.css';

class Playground extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showFull: false
        }
        //this.showPlayground = this.showPlayground.bind(this);
    }

    showPlayground(){
        this.setState({
            showFull: !this.state.showFull
        });
    }

    render(){
        let content = this.state.showFull ? 
            <div className="playground-content-full" onClick={(event)=>event.stopPropagation()}>
                <label>Tic Tac Toe</label>
                <Game />
            </div> 
            : 
            <div className="playground-content-window">Playground</div>;
        return (
            <div className={this.state.showFull ? "playground-full" : "playground-window"} onClick={()=>this.showPlayground()}>
                {content}
            </div>
        );
    }
}

export default Playground;