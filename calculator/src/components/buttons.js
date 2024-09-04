import React from "react";
export default function Buttons(props){
    return(
        <div className="keypad">
        <button onClick={props.clear} id="clear">Clear</button>
        <button onClick={props.backspace} id="backspace">C</button>
        <button name="/" onClick={props.handleClick}>&divide;</button>
        <button name="7" onClick={props.handleClick}>7</button>
        <button name="8" onClick={props.handleClick}>8</button>
        <button name="9" onClick={props.handleClick}>9</button>
        <button name="*" onClick={props.handleClick}>&times;</button>
        <button name="4" onClick={props.handleClick}>4</button>
        <button name="5" onClick={props.handleClick}>5</button>
        <button name="6" onClick={props.handleClick}>6</button>
        <button name="-" onClick={props.handleClick}>&ndash;</button>
        <button name="1" onClick={props.handleClick}>1</button>
        <button name="2" onClick={props.handleClick}>2</button>
        <button name="3" onClick={props.handleClick}>3</button>
        <button name="+" onClick={props.handleClick}>+</button>
        <button name="0" onClick={props.handleClick}>0</button>
        <button name="." onClick={props.handleClick}>.</button>
        <button onClick={props.calculate} id="result">=</button>
      </div>
    )
}