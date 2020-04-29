import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './../scss/components/Task.module.scss';

class Task extends Component {

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className={classes.task__container}>
                <input type="checkbox"  
                className={classes.task__checkbox}
                onChange={this.props.markDone.bind(this, id)} />
                <p className={classes.task__title}>{title}</p>
                <span 
                className={classes.task__delete} 
                onClick={this.props.deleteTask.bind(this, id)}>x</span>
            </div>
        )
    }
}

export default Task;
