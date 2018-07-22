import React from 'react';
import './style.css';

function Square(props) {
    let style = props.selected ? "square square-selected" : "square";
    return (
        <button className={style} onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default Square;