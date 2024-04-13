import { Fragment } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold text-center py-5 ">Todo List!</h1>
      <InputBox />
      <TodoList />
    </Fragment>
  );
};

export default App;
