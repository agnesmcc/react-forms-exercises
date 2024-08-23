import React from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = React.useState(INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        addBox({...formData})
        setFormData(INITIAL_STATE)
        document.getElementById('width').focus();
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
                    <label htmlFor="width">Width</label>
                    <input id="width" name="width" type="text" 
                        value={formData.width} 
                        onChange={handleChange}/>
                </div>  
                <div>   
                    <label htmlFor="height">Height</label>
                    <input id="height" name="height" type="text" 
                        value={formData.height}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input id="color" name="color" type="text" 
                        value={formData.color}
                        onChange={handleChange}/>
                </div>
                <button>Add a new box</button>
            </form>
        </div>
    )
}   

export default NewBoxForm;
