import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'
import { getAllTasks } from './tasksSlice'

import classes from '../../scss/components/TasksList.module.scss';


function TasksList() {
    const dispatch = useDispatch()

    const { tasks, isError, message  } = useSelector(state => state.tasks)

    useEffect(() => {
        if (isError) console.log(message)
        dispatch(getAllTasks())
    }, [isError, message, dispatch])



    const taskListRender = () => {
        if(tasks.length === 0) return <li>Loading</li>
            else {
                return tasks.map(task => (
                    <li key={task._id} 
                        className={ task.completed ? `${classes.tasks__item} ${classes.task___complete}` : classes.tasks__item }>
                            < Task task={task} />
                    </li>
                ));
            } 
    }

    return(
        taskListRender()
    )
}

export default TasksList
