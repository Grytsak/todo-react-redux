import React from 'react'
import classes from '../../scss/components/Filters.module.scss'
import TaskFilter from './TaskFilter'
import { getAllTasks, getActiveTasks, getCompletedTasks } from './tasksSlice'

function TaskFilters() {


  return (
    <form className={classes.filters}>
      <TaskFilter taskFilter='SHOW_ALL' getTasks={getAllTasks}>Show All</TaskFilter>
      <TaskFilter taskFilter='SHOW_ACTIVE' getTasks={getActiveTasks}>Show Active</TaskFilter>
      <TaskFilter taskFilter='SHOW_COMPLETED' getTasks={getCompletedTasks}>Show Completed</TaskFilter>
    </form>
  )
}

export default TaskFilters
