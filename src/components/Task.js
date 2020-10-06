import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markTaskDone, deleteTask } from '../features/tasks/tasksSlice';

import classes from './../scss/components/Task.module.scss';

function mapDispatchToProps(dispatch) {
    return {
        markTaskDone: taskId => dispatch(markTaskDone(taskId)),
        deleteTask: taskId => dispatch(deleteTask(taskId))
    }
}

class ConnectedTask extends Component {

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

const Task = connect(null, mapDispatchToProps)(ConnectedTask);

export default Task;
