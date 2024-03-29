import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [ description , setDescription ] = useState("");

    //submit the form to send the data
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = { description };
            const response = await fetch("http://localhost:5000/todos",{ 
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);
        
        //refresh and show the changes
        window.location = "/"; 
        }catch (err) {
            console.error(err.message)
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5"> Pern Todo</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add </button>
            </form>
        </Fragment>
    )
}

export default InputTodo;