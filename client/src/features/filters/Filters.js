import React, { Component } from 'react'
import { VisibilityFilters } from './filtersSlice'

import classes from '../../scss/components/Filters.module.scss'
import FilterContainer from './FilterContainer'

export default class Filters extends Component {


  render() {
    return (
      <form className={classes.filters}>
        <FilterContainer filter={VisibilityFilters.SHOW_ALL}>Show all</FilterContainer>
        <FilterContainer filter={VisibilityFilters.SHOW_ACTIVE}>Show Active</FilterContainer>
        <FilterContainer filter={VisibilityFilters.SHOW_COMPLETED}>Show Completed</FilterContainer>
      </form>
    )
  }
}
