import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        console.log(newTodo)
        newTodo.id = uuidv4()
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = (id) => {
        console.log(id)
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                <Todo key={todo.id} removeTodo={removeTodo} {...todo}/>
            ))}
        </div>
    )
}

export default TodoList
