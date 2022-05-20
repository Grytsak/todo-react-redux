import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import * as api from '../../api/index.js'

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      return await api.getAllTasks()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const addNewTask = createAsyncThunk(
  'tasks/addNewTask',
  async (name, thunkAPI) => {
    try {
      return await api.createTask(name)
    } catch(error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const markTaskDone = createAsyncThunk(
  'task/markTaskDone',
  async ({id, completed}, thunkAPI) => {
    try {
      return await api.markTaskDone(id, completed)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (id, thunkAPI) => {
    try {
      return await api.deleteTask(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tasks = action.payload
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(addNewTask.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tasks.push(action.payload)
      })
      .addCase(addNewTask.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(markTaskDone.pending, (state) => {
        state.isLoading = true
      })
      .addCase(markTaskDone.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        const task = state.tasks.find(task => task._id === action.payload._id)
        if (task) {
          task.completed = action.payload.completed
        }
      })
      .addCase(markTaskDone.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tasks = state.tasks.filter(
          task => task._id !== action.payload
        )
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})


export const { reset } = taskSlice.actions

export default taskSlice.reducer