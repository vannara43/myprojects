import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@material-ui/core";

function ToDoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      //add item to list
      addTodo({ ...todo, id: uuidv4() });
      //reset item input
      setTodo({ ...todo, task: "" });
    }
  }

  useEffect(() => {}, [todo]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>To-Do Form</h4>
            <form className="todo-form" onSubmit={handleSubmit}>
              <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                placeholder="Enter a task"
              />
              <Button type="submit" className="mx-1 my-3">
                Submit
              </Button>
            </form>
          </div>

          <div className="col p-1">
            <p>
              <b>
                State data | {"Type of data: "} {JSON.stringify(typeof todo)}
              </b>
            </p>
            <i className="row">ID: {JSON.stringify(typeof todo.id)}</i>
            <i className="row">task: {JSON.stringify(typeof todo.task)}</i>
            <i className="row">
              Completed: {JSON.stringify(typeof todo.completed)}
            </i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ToDoForm;
