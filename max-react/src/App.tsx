import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Presentation from "./components/Presentation";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  // const todos = [{ id: "t1", text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      <Presentation color="orange">
        Prop children
        <hr />
      </Presentation>
    </div>
  );
}

export default App;
