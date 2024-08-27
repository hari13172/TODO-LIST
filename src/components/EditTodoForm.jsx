import React, { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError("please enter task");
      return;
    }

    editTodo(task.id, value);
    setValue("");
    setError("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="todo-btn" type="submit">
        UpdateTask
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default EditTodoForm;
