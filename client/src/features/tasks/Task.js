import React from 'react'
import { useDispatch } from 'react-redux';
import { markTaskDone, deleteTask } from '../tasks/tasksSlice';

import classes from '../../scss/components/Task.module.scss';

 function Task(props) {

    const { _id, name, completed } = props.task;
    const dispatch = useDispatch()
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
            onChange={() => dispatch(markTaskDone({_id, completed: !completed}))} 
            checked={isChecked}/>

            <p className={classes.task__title}>{name}</p>

            <span className={classes.task__delete} onClick={() => dispatch(deleteTask(_id))}>x</span> 
        </div>
    )
}

export default Task
