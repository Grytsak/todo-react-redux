import { combineReducers } from 'redux';
import tasksReducer from '../features/tasks/tasksSlice';
import filtersReducer from '../features/filters/filtersSlice';

export default combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer
})
