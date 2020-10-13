import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markTaskDone, deleteTask } from '../tasks/tasksSlice';

import classes from '../../scss/components/Task.module.scss';

function mapDispatchToProps(dispatch) {
    return {
        markTaskDone: taskId => dispatch(markTaskDone(taskId)),
        deleteTask: taskId => dispatch(deleteTask(taskId))
    }
}

class Task extends Component {

    render() {
        const { id, title } = this.props.task;
        return (
            <div className={classes.task__container}>
                <input type="checkbox"  
                className={classes.task__checkbox}
                onChange={() => this.props.markTaskDone(id)} />

                <p className={classes.task__title}>{title}</p>

            <span className={classes.task__delete} onClick={() => this.props.deleteTask(id)}>x</span> 
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Task);
