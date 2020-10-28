import React, { Component } from 'react';
import TaskContainer from './TaskContainer';

import classes from '../../scss/components/TasksList.module.scss';

export default class TasksList extends Component {
    render() {
        return this.props.tasks.map(task => (
            <li key={task.id} 
                className={ task.completed ? `${classes.tasks__item} ${classes.task___complete}` : classes.tasks__item }>
                    < TaskContainer task={task} />
            </li>
        ));
    }
}
