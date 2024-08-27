import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Todo({ task, toggleComplete, deleteTodo, toggleCheck, editTodo }) {
  return (
    <div className="Todo">
      <input
        type="checkbox"
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleCheck(task.id)}
      />
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <MdDelete onClick={() => deleteTodo(task.id)} />
      <FaEdit onClick={() => editTodo(task.id)} />
    </div>
  );
}

export default Todo;
