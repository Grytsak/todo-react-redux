import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from '../../scss/components/Filters.module.scss'


function TaskFilter(props) {
  const dispatch = useDispatch()
  const { children, taskFilter } = props
  const  filters  = useSelector(state => state.tasks.filters)


  let setFilter = (e) => {
    e.preventDefault();
    dispatch(props.getTasks())
  }

  return (
    <button className={classes.filters__button}
    onClick={(e) => {setFilter(e)}}
    disabled={filters === taskFilter}>
      {children}
    </button>
  )
}

export default TaskFilter
