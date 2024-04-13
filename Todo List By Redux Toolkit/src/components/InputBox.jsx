import React, { Fragment, useState } from "react";
import styles from "./InputBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../reducers/taskSlice";

const InputBox = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (enteredTask === "") return;
    dispatch(addTask(enteredTask));
    setEnteredTask("");
  };

  return (
    <Fragment>
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder="Please Enter Task"
          value={enteredTask}
          onChange={(e) => setEnteredTask(e.target.value)}
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
