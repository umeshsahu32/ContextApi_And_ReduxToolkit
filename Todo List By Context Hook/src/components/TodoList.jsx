import React, { Fragment, useContext, useState } from "react";
import styles from "./TodoList.module.css";
import { Todo } from "../Context/Context";
import { MdDownloadDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TodoList = () => {
  const { todoList, setTodoList } = useContext(Todo);
  const [updateTodo, setUpdateTodo] = useState("");

  //! MARK TODO AS COMPLETE
  const todoCompleteClickHandler = (id) => {
    let clickedItem = todoList.filter((item) => item.id === id);
    clickedItem[0].done = !clickedItem[0].done;
    let indexOfClickedItem = todoList.findIndex((item) => item.id === id);
    let updateList = [...todoList];
    updateList[indexOfClickedItem] = clickedItem[0];
    setTodoList(updateList);
  };

  //! DELETE TODO FROM LIST
  const todoDeleteClickHandler = (id) => {
    let clickedItem = todoList.filter((item) => item.id !== id);
    setTodoList(clickedItem);
  };

  //! UPDATE IS EDITABLE FIELD
  const todoEditClickHandler = (id) => {
    let clickedItem = todoList.filter((item) => item.id === id);
    clickedItem[0].isEditable = !clickedItem[0].isEditable;
    setUpdateTodo(clickedItem[0].todo);
    let indexOfClickedItem = todoList.findIndex((item) => item.id === id);
    let updateList = [...todoList];
    updateList[indexOfClickedItem] = clickedItem[0];
    setTodoList(updateList);
  };

  //! UPDATE TODO
  const updateTodoHandler = (id) => {
    let clickedItem = todoList.filter((item) => item.id === id);
    clickedItem[0].todo = updateTodo;
    clickedItem[0].isEditable = false;
    let indexOfClickedItem = todoList.findIndex((item) => item.id === id);
    let updateList = [...todoList];
    updateList[indexOfClickedItem] = clickedItem[0];
    setUpdateTodo("");
    setTodoList(updateList);
  };

  //! JSX START FROM HERE
  return (
    <Fragment>
      <div className={styles.list_container}>
        {todoList.length > 0 &&
          todoList.map((item) => {
            return (
              <div key={item.id} className={styles.list_item}>
                <input
                  type="text"
                  value={item.isEditable ? updateTodo : item.todo}
                  onChange={(e) => setUpdateTodo(e.target.value)}
                  className={`${
                    item.done === true ? styles.line_through : ""
                  } ${item.isEditable === false ? styles.todo_input : ""}`}
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
        {todoList.length === 0 && (
          <p className={styles.warning_text}>No Todo Found!!!</p>
        )}
      </div>
    </Fragment>
  );
};

export default TodoList;
