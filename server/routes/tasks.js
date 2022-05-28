import express from 'express'
const router = express.Router()
import { getAllTasks, getActiveTasks, getCompletedTasks, createTask, changeTaskStatus, deleteTask } from '../controllers/tasks.js'
import protect from '../middleware/auth.js'


router.get('/', protect, getAllTasks).post('/', protect, createTask)
router.patch('/:id', protect, changeTaskStatus).delete('/:id', protect, deleteTask)
router.get('/active', protect, getActiveTasks)
router.get('/completed', protect, getCompletedTasks)

export default router
