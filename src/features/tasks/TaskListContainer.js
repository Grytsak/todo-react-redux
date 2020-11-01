import { connect } from 'react-redux'
import TasksList from './TasksList'
import { VisibilityFilters } from '../filters/filtersSlice'
import { createSelector } from '@reduxjs/toolkit'

const selectTasks = state => state.tasks
const selectFilter = state => state.filters

const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return tasks
      case VisibilityFilters.SHOW_COMPLETED:
        return tasks.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return tasks.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

// const mapStateToProps = state => {
//   return { tasks: state.tasks };
// };

const mapStateToProps = state => ({
  tasks: selectVisibleTasks(state)
})


export default connect(mapStateToProps)(TasksList);