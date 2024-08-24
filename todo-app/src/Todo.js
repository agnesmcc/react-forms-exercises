import React from "react";

const Todo = ({id, task, removeTodo}) => {
    return (
        <div>
            <span>{task}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo;
