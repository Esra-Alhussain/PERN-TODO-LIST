import React, { Fragment, useState } from "react";


const EditTodo = ({ todo }) => {
    const [ description , setDescription ] = useState(todo.description);
    console.log(todo)

    //Edit description function 
    const updateDescription = async e => {
        e.preventDefault();
        try{
            const body = {  description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, 
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                }
                );
                console.log(response)
                window.location = "/";
        }catch (err){
            console.error(err.message);
        }
    }
    return (
     <Fragment>
        {/* Button to Open the Modal  */}
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={ `#id${ todo.todo_id }` }>
        Edit
        </button>

        {/* The Modal  */}
        <div class="modal" id= { `id${ todo.todo_id }`}  onClick={() => 
                setDescription(todo.description)}>
        <div class="modal-dialog">
            <div class="modal-content">

            {/* Modal Header  */}
            <div class="modal-header">
                <h4 class="modal-title">Edit Todo</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={() => 
                setDescription(todo.description)}>&times;</button>
            </div>

            {/* Modal body  */}
            <div class="modal-body">
            <input type ="text" className="form-control" value={ description } onChange= {e =>  setDescription (e.target.value)}/>
            </div>

            {/* Modal footer  */}
            <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = { e => updateDescription(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal"  onClick={() => 
                setDescription(todo.description)}>Close</button>
            </div>

            </div>
        </div>
        </div>
     </Fragment>
    )
}

export default EditTodo;