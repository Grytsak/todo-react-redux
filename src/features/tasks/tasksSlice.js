import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    {
    id: 1,
    title: 'Task 1',
    completed: false
  },
  {
    id: 2,
    title: 'Task 2',
    completed: false
  },
  {
    id: 3,
    title: 'Task 3',
    completed: false
  }
],
  reducers: {
    addNewTask(state, action) {
      const { id, title, completed } = action.payload;
      state.push({ id, title, completed })
    },
    markTaskDone(state, action) {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        task.complete = !task.complete
      }
    },
    deleteTask(state, action) {
      state.map((task, index) => {
        if (task.id === action.payload) {
          state.splice(index, 1);
        }
      });
    }
  }
})


export const { addNewTask, markTaskDone, deleteTask } = taskSlice.actions

export default taskSlice.reducer