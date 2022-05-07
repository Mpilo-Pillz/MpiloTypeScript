import React from "react";

const NewTodo: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" />
      </div>
      <button type="submit">Add ToDO</button>
    </form>
  );
};

export default NewTodo;
