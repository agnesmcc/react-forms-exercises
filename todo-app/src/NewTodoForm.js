import React from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = React.useState(INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        addTodo({...formData})
        setFormData(INITIAL_STATE)
        document.getElementById('task').focus();
    }   

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }   

    return (
        <div>   
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Task</label>
                    <input id="task" name="task" type="text" 
                        value={formData.task} 
                        onChange={handleChange}/>
                </div>  
                <button>Add a new todo</button>
            </form>
        </div>
    )
}   

export default NewTodoForm;
