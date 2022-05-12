import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  // const todos = [{ id: "t1", text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text: text }]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
