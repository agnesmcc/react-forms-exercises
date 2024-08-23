import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([{color: "red", width: 100, height: 100}]);

    const addBox = (newBox) => {
        console.log(newBox)
        setBoxes(boxes => [...boxes, newBox])
    }

    return (
        <div>
            <h1>Box List</h1>
            {boxes.map((box) => 
                <Box key={uuidv4()} {...box} />)}
            <NewBoxForm addBox={addBox}/>
        </div>
    )
}

export default BoxList
