import React from "react";

const Box = ({id, color, width, height, removeBox}) => {
    return (
        <div style={{
            backgroundColor: color, 
            width: width, 
            height: height
        }}>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )
}

export default Box;
