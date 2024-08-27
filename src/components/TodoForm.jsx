import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError("please enter task");
      return;
    }

    addTodo(value);
    setValue("");
    setError("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="todo-btn" type="submit">
        AddTask
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TodoForm;
