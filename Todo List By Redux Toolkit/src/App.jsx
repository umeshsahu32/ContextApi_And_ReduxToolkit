import { Fragment } from "react";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <Fragment>
      <h4 className={styles.primary_heading}>Task List!</h4>
      <InputBox />
      <TodoList />
    </Fragment>
  );
}

export default App;
