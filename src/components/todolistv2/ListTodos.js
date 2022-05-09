import React, { Fragment, useEffect,useState } from 'react'
import EditTodo from './EditTodo';
import { Table } from 'react-bootstrap'

function ListTodos() {

    const [todos, setTodos] = useState([]);

    //delete function to delete tasks
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            false && console.log(response, "no reponse");
        } catch (error) {
            console.error(error.message)
        }
        setTodos(todos.filter(todo => todo.data_id !== id));
        // window.location = window.location.pathname
    }
    
    //get function to retrieve tasks
     const getTodos = async () => {
         try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json()

            setTodos(jsonData)
        } catch (error) {
             console.error(error.message)
         } 
     }
    

     useEffect(() => {
      getTodos();
    }, [])

    console.log(todos)
    
  return (
      <Fragment>
    <div>ListTodos</div>

    <Table striped bordered responsive hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <tr key={todo.data_id}>
                <td>{todo.data_id}</td>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}/></td>
                <td><button className='btn btn-danger' onClick={()=>deleteTodo(todo.data_id)}>Delete</button></td>
            </tr>
            ))}
            
        </tbody>
    </Table>
    </Fragment>
  )
}

export default ListTodos