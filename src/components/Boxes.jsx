import {useState} from 'react';
import Box from './Box';

const Boxes = ({boxes, deleteBox, updateBox}) => {

    return (
        boxes.map((box, idx) =>
            <Box key={idx} index={idx} box={box} deleteBox={deleteBox} updateBox={updateBox}/>
        )
    )
}

export default Boxes;