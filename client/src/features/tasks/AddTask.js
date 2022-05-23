import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from './tasksSlice'

function AddTask() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const addTask = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(addNewTask({name}))
            setName('')
        } else {
            alert('Task name must not be empty');
        }
        
    }

    return (
        <form>
            <div>
                <input
                    type="text"  
                    name="name"
                    value={name}
                    placeholder="Add new task..."
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                <button onClick={addTask}>+</button>
            </div>
        </form>
    )
}

export default AddTask
