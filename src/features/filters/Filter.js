import React, { Component } from 'react'
import classes from '../../scss/components/Filters.module.scss'

export default class Filter extends Component {
  render() {
    const { active, children, filter } = this.props;

    let setFilter = (e) => {
      e.preventDefault();
      this.props.setVisibilityFilter(filter);
    }

    return (
      <button className={classes.filters__button}
      onClick={(e) => {setFilter(e)}}
      disabled={active}>
        {children}
      </button>
    )
  }
}
