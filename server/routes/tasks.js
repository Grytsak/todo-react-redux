import express from 'express'
const router = express.Router()

import { getAllTasks, getActiveTasks, getCompletedTasks, createTask, changeTaskStatus, deleteTask } from '../controllers/tasks.js'


router.get('/', getAllTasks).post('/', createTask)
router.patch('/:id', changeTaskStatus).delete('/:id', deleteTask)
router.get('/active', getActiveTasks)
router.get('/completed', getCompletedTasks)

export default router
