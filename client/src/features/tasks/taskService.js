import axios from 'axios'

const url = 'http://localhost:5000/api/tasks/'

export const getAllTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(url, config)
    return response.data
}
export const getActiveTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(`${url}/active`, config)
    return response.data
}
export const getCompletedTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(`${url}/completed`, config)
    return response.data
}
export const createTask = async (newTask, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(url, newTask, config)
    return response.data
}
export const markTaskDone = async (id, completed, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.patch(`${url}${id}`, {id, completed}, config)
    return response.data
}
export const deleteTask = async (id, token) =>  {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(`${url}${id}`, config)
    return response.data
} 