import React, { Component } from 'react';

import classes from '../../scss/components/Task.module.scss';

export default class Task extends Component {

    render() {
        const { id, title } = this.props.task;
        return (
            <div className={classes.task__container}>
                <input type="checkbox"  
                className={classes.task__checkbox}
                onChange={() => this.props.markTaskDone(id)} 
                checked={false}/>

                <p className={classes.task__title}>{title}</p>

            <span className={classes.task__delete} onClick={() => this.props.deleteTask(id)}>x</span> 
            </div>
        )
    }
}
