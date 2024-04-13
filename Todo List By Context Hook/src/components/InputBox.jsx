import React, { Fragment, useContext, useState } from "react";
import styles from "./InputBox.module.css";
import { Todo } from "../Context/Context";

const InputBox = () => {
  const { todoList, setTodoList } = useContext(Todo);
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodoHandler = () => {
    if (enteredTodo === "") return;
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        todo: enteredTodo,
        done: false,
        isEditable: false,
      },
    ]);
    setEnteredTodo("");
  };

  return (
    <Fragment>
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder="Please Enter Todo"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodoHandler();
            }
          }}
          required
        />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
    </Fragment>
  );
};

export default InputBox;
