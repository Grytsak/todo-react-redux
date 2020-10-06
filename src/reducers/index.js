import { combineReducers } from 'redux'
import tasksReducer from '../features/tasks/tasksSlice'

export default combineReducers({
  tasks: tasksReducer
})
