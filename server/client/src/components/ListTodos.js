import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [ todos, setTodos ] = useState([])

  //delete function
  const deleteTodo = async (id) => {
    try{
      //delete fetch requuest to delete a specific todo in our restful Api 
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id ))
      console.log(deleteTodo)
    }catch(err){
      console.error(err.message)
    }
  }
  //fetch the todos data list from the server 
  const getTodos = async () => {
    try{
      const response = await fetch("http://localhost:5000/todos")
      const jsonData = await response.json()  //parses the JSON response from the server into a JS object

      console.log(jsonData)
      //updates the todos state variable with the todo items fetched from the server
      setTodos(jsonData)
    }catch (err){
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
    return(
        <Fragment>
          { " " }
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@e
        xample.com</td>
      </tr> */}
      { todos.map (todo => (
        <tr key = {todo.todo_id}>
          <td> { todo.description} </td>
          <td> <button className="btn btn-dsnger">Edit </button></td>
          <td> <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}> Delete </button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListTodos;