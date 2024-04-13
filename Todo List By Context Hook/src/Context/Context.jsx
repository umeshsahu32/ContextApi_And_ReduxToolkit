import { createContext, useState } from "react";

export const Todo = createContext();

const Context = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <Todo.Provider value={{ todoList, setTodoList }}>{children}</Todo.Provider>
  );
};

export default Context;
