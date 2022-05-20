import { connect } from 'react-redux'
import React, { Component } from 'react';
import TasksList from './TasksList'
import { VisibilityFilters } from '../filters/filtersSlice'
import { createSelector } from '@reduxjs/toolkit'
import { getAllTasks } from './tasksSlice'

const selectTasks = state => state.tasks.tasks
const selectFilter = state => state.filters

class TasksListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        tasks: [],
        isLoading: false
    }
}

  componentDidMount() {
    this.props.getAllTasks()
  }

  render() {
    return <TasksList isLoading={this.props.isLoading} tasks={this.props.tasks} />
  }
}

// const selectVisibleTasks = createSelector(
//   [selectTasks, selectFilter],
//   (tasks, filter) => {
//     switch (filter) {
//       case VisibilityFilters.SHOW_ALL:
//         return tasks
//       case VisibilityFilters.SHOW_COMPLETED:
//         return tasks.filter(t => t.completed)
//       case VisibilityFilters.SHOW_ACTIVE:
//         return tasks.filter(t => !t.completed)
//       default:
//         throw new Error('Unknown filter: ' + filter)
//     }
//   }
// )

// const mapStateToProps = state => ({
//   tasks: selectVisibleTasks(state)
// })

const mapStateToProps = state => {
  console.log('STATE:', state)
  return { 
    tasks: state.tasks.tasks,
    isLoading: state.tasks.isLoading
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: () => dispatch(getAllTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer)