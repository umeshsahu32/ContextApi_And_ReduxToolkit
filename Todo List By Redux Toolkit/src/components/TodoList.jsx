import React, { Fragment, useContext, useState } from "react";
import styles from "./TodoList.module.css";
import { MdDownloadDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTask,
  markTaskAsComplete,
  makeTaskEditable,
  updateTaskText,
} from "../reducers/taskSlice";

const TodoList = () => {
  const [updateTask, setUpdateTask] = useState("");
  const dispatch = useDispatch();

  const taskList = useSelector((state) => state.tasks);

  //! MARK TODO AS COMPLETE
  const todoCompleteClickHandler = (id) => {
    dispatch(markTaskAsComplete(id));
  };

  //! DELETE TODO FROM LIST
  const todoDeleteClickHandler = (id) => {
    dispatch(removeTask(id));
  };

  //! UPDATE IS EDITABLE FIELD
  const todoEditClickHandler = (id) => {
    setUpdateTask("");
    dispatch(makeTaskEditable(id));
    let task = taskList.filter((item) => item.id === id);
    setUpdateTask(task.task);
  };

  //! UPDATE TODO
  const updateTodoHandler = (id) => {
    dispatch(updateTaskText({ id, updateTask }));
    setUpdateTask("");
  };

  //! JSX START FROM HERE
  return (
    <Fragment>
      <div className={styles.list_container}>
        {taskList.length > 0 &&
          taskList.map((item) => {
            return (
              <div key={item.id} className={styles.list_item}>
                <input
                  type="text"
                  value={item.isEditable ? updateTask : item.task}
                  onChange={(e) => setUpdateTask(e.target.value)}
                  className={`${
                    item.isDone === true ? styles.line_through : ""
                  } ${
                    item.isEditable === false
                      ? styles.todo_input
                      : styles.todo_input_edit
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodoHandler(item.id);
                    }
                  }}
                  readOnly={!item.isEditable}
                />
                <div className={styles.icon_container}>
                  <MdDownloadDone
                    className={styles.icon}
                    onClick={() => todoCompleteClickHandler(item.id)}
                  />
                  <MdDeleteOutline
                    className={styles.icon}
                    onClick={() => todoDeleteClickHandler(item.id)}
                  />
                  <MdEdit
                    className={styles.icon}
                    onClick={() => todoEditClickHandler(item.id)}
                  />
                </div>
              </div>
            );
          })}
        {taskList.length === 0 && (
          <p className={styles.warning_text}>No Todo Found!!!</p>
        )}
      </div>
    </Fragment>
  );
};

export default TodoList;
