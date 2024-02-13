import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditToodo";

const ListTodos = () => {
  const [ todos, setTodos ] = useState([])

  //delete function
  const deleteTodo = async (id) => {
    try{
      // Send a DELETE request to the server to delete the specified todo
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      // Update the todos statez by filtering out the deleted todo
      // filters the todos array to create a new array containing only the todo items whose todo_id does not match the id of the todo item being deleted
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
  //useEffect hook to fetch todosdata when the component mounts
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
      { todos.map ( todo => (
        <tr key = { todo.todo_id }>
          <td> { todo.description} </td>
          <td>
             <EditTodo todo={ todo }/>
          </td>
          <td> <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}> Delete </button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListTodos;