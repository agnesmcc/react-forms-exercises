import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([{color: "red", width: 100, height: 100}]);

    const addBox = (newBox) => {
        console.log(newBox)
        newBox.id = uuidv4()
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = (id) => {
        console.log(id)
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <h1>Box List</h1>
            {boxes.map((box) => (
                <Box key={box.id} removeBox={removeBox} {...box} />
            ))}
            <NewBoxForm addBox={addBox}/>
        </div>
    )
}

export default BoxList
