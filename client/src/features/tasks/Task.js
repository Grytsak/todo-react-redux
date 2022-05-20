import React, { Component } from 'react';

import classes from '../../scss/components/Task.module.scss';

export default class Task extends Component {

    render() {
        const { _id, name, completed } = this.props.task;
        let isChecked;

        if(completed) {
            isChecked = true;
        } else {
            isChecked = false;
        }

        return (
            <div className={classes.task__container}>
                <input type="checkbox"  
                className={classes.task__checkbox}
                onChange={() => this.props.markTaskDone(_id, !completed)} 
                checked={isChecked}/>

                <p className={classes.task__title}>{name}</p>

                <span className={classes.task__delete} onClick={() => this.props.deleteTask(_id)}>x</span> 
            </div>
        )
    }
}
