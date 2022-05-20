import express from 'express'
const router = express.Router()

import { getAllTasks, createTask, changeTaskStatus, deleteTask } from '../controllers/tasks.js'


router.get('/', getAllTasks).post('/', createTask)
router.patch('/:id', changeTaskStatus).delete('/:id', deleteTask)

export default router
