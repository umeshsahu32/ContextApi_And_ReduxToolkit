import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
        isEditable: false,
      };
      state.tasks.push(task);
    },
    removeTask: (state, action) => {
      console.log(action);
      const updatedTasks = state.tasks.filter(
        (item) => item.id !== action.payload
      );
      state.tasks = updatedTasks;
    },
    markTaskAsComplete: (state, action) => {
      console.log(action);
      let clickedItem = state.tasks.filter(
        (item) => item.id === action.payload
      );
      clickedItem[0].isDone = !clickedItem[0].isDone;
      let indexOfClickedItem = state.tasks.findIndex(
        (item) => item.id === action.payload
      );
      let updateList = [...state.tasks];
      updateList[indexOfClickedItem] = clickedItem[0];
      state.tasks = updateList;
    },

    makeTaskEditable: (state, action) => {
      console.log(action);
      let clickedItem = state.tasks.filter(
        (item) => item.id === action.payload
      );
      clickedItem[0].isEditable = !clickedItem[0].isEditable;
      let indexOfClickedItem = state.tasks.findIndex(
        (item) => item.id === action.payload
      );
      let updateList = [...state.tasks];
      updateList[indexOfClickedItem] = clickedItem[0];
      state.tasks = updateList;
    },

    updateTaskText: (state, action) => {
      console.log("action", action);
      let id = action.payload.id;
      let clickedItem = state.tasks.filter((item) => item.id === id);
      clickedItem[0].task = action.payload.updatedTask;
      clickedItem[0].isEditable = false;
      let indexOfClickedItem = state.tasks.findIndex((item) => item.id === id);
      let updateList = [...state.tasks];
      updateList[indexOfClickedItem] = clickedItem[0];
      state.tasks = updateList;
    },
  },
});

export const {
  addTask,
  removeTask,
  markTaskAsComplete,
  makeTaskEditable,
  updateTaskText,
} = taskSlice.actions;

export default taskSlice.reducer;
