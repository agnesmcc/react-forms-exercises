import React from "react";

const Box = ({color, width, height}) => {
    return (
        <div style={{
            backgroundColor: color, 
            width: width, 
            height: height
        }}></div>
    )
}

export default Box;
