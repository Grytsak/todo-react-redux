import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddTask from '../features/tasks/AddTask'
import TasksList from '../features/tasks/TasksList'
import TaskFilters from '../features/tasks/TaskFilters'
import { logout } from '../features/auth/authSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    return(
        <>        
            <header className="todo-header">
                <h1>Todo React Redux</h1>
                <button onClick={() => dispatch(logout())}>Logout</button>
                <AddTask />
                <TaskFilters />
            </header>
            <ul className="todo-list">
                <TasksList />
            </ul>
        </>
    )
}

export default Dashboard