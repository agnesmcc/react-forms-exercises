import React, { useState } from 'react';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([{color: "red", width: 100, height: 100}]);
    return (
        <div>
            <h1>Box List</h1>
            {boxes.map((box) => 
                <Box key={box.id} {...box} />)}
        </div>
    )
}

export default BoxList
