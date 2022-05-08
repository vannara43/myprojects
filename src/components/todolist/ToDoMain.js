import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function ToDoMain() {
  const [todos, setTodos] = useState([]);

  let location = useLocation().pathname.slice(12);

  useEffect(() => {
    console.log(
      `%c Welcome to ${location.toUpperCase()}! `,
      `background-color:black; color:green;font-weight:bold;font-size:25px; padding: 15px;border:3px solid green;`
    );

    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    console.table(todos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <Typography variant="h2">Main Display</Typography>
      <hr />
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default ToDoMain;
