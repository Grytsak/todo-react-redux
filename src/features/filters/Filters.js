import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters } from './filtersSlice'
import { setVisibilityFilter } from '../filters/filtersSlice';

import classes from '../../scss/components/Filters.module.scss'

export class Filters extends Component {
  render() {
    return (
      <form className={classes.filters}>
        <button filter={VisibilityFilters.SHOW_ALL} className={classes.filters__button} disabled>Show all</button>
        <button filter={VisibilityFilters.SHOW_ACTIVE} className={classes.filters__button}>Show Active</button>
        <button filter={VisibilityFilters.SHOW_COMPLETED} className={classes.filters__button}>Show Completed</button>
      </form>
    )
  }
}



const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = {
  setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
