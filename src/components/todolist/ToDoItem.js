import React from "react";
import { Checkbox, IconButton, ListItem } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ToDoItem({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <ListItem
      className="border col my-2 col-lg-5 border-primary"
      style={{ display: "flex" }}
    >
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <span
        className="col"
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        <i>Id: {todo.id}</i>
        <p>Task Name: {todo.task}</p>
      </span>
      <IconButton
        className="btn btn-primary btn-sm m-1"
        onClick={handleRemoveClick}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default ToDoItem;
