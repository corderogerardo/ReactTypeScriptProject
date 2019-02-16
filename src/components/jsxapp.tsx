import React from 'react';
import ReactDOM from 'react-dom';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const jsxapp = () => {
    const buttonText = { text: 'Click me'};
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="text" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    )
}
