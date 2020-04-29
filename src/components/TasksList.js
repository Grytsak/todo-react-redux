import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';

import classes from './../scss/components/TasksList.module.scss';

class TasksList extends Component {
    render() {
       return this.props.todos.map(todo => (
            <li key={todo.id} 
                className={ todo.complete ? `${classes.tasks__item} ${classes.task___complete}` : classes.tasks__item }>
                <Task todo={todo} deleteTask={this.props.deleteTask} markDone={this.props.markDone} />
            </li>
       ));
    }
}

export default TasksList;
