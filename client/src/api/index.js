import axios from 'axios'

const url = 'http://localhost:5000/api/tasks/'

export const getAllTasks = async () => {
    const response = await axios.get(url)
    return response.data
}
export const createTask = async (newTask) => {
    const response = await axios.post(url, newTask)
    return response.data
}
export const markTaskDone = async (id, completed) => {
    const response = await axios.patch(`${url}${id}`, {id, completed})
    console.log('response:', response.data)
    return response.data
}
export const deleteTask = async (id) =>  {
    const response = await axios.delete(`${url}${id}`)
    return response.data
} 