import {useState} from 'react';

const Box = ({box, index, deleteBox, updateBox}) => {

    const checked = 'line-through';
    const unchecked = '';

    return (
        <span style={{
                    'backgroundColor': box.color, 
                    height:'200px', width: '200px', 
                    display: 'inline-block',
                    verticalAlign: "top",
                    textDecoration: box.status ? checked : unchecked}}>
                    This is the {box.color} box
                    <p>Checkbox<input type="checkbox" checked={box.status} onClick={e => updateBox(index)} /></p>
                    <button onClick={(e) => deleteBox(index)} >Delete</button>
        </span>
    )
}

export default Box;