import React from "react";
import ToDoItem from "./ToDoItem";
import { List } from "@material-ui/core";

function ToDoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div className="container">
      To Do List:
      <List>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </List>
    </div>
  );
}

export default ToDoList;
