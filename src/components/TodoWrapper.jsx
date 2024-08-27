import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

function TodoWrapper() {
  const [todos, settodos] = useState([]);

  // add logic
  const addTodo = (todo) => {
    settodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  //complete logic
  const toggleComplete = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //togglecheck logic

  const toggleCheck = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete logic
  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  // edit logic
  const editTodo = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, task) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            toggleCheck={toggleCheck}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
