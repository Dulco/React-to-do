import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };
    const onCancel = () =>{
        setOpenModal(false);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue!=""){
            addTodo(newTodoValue);
            setOpenModal(false);
        }else{
            document.getElementById('errormsg').style.display="block";
        }
        
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Add new Task</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="New task"></textarea>
            <label id="errormsg" className="errormsg">More than 1 character</label>
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button-cancel"
                type="button"
                onClick={onCancel}
                >

                Cancel
                </button>
                <button
                className="TodoForm-button TodoForm-button-add"
                type="submit"
                >

                Submit
                </button>
            </div>        
        </form>
        
    )
}

export {TodoForm}