import Task from '../models/Task.js'
import User from '../models/User.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'


// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
export const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({user: req.user.id})
    res.status(200).json(tasks)
})


// @desc    Get active tasks
// @route   GET /api/tasks/active
// @access  Private
export const getActiveTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({user: req.user.id})
    const activeTasks = tasks.filter(task => task.completed === false)
    res.status(200).json(activeTasks)
})


// @desc    Get completed tasks
// @route   GET /api/tasks/completed
// @access  Private
export const getCompletedTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({user: req.user.id})
    const completedTasks = tasks.filter(task => task.completed === true)
    res.status(200).json(completedTasks)
})


// @desc    Create new tasks
// @route   POST /api/tasks
// @access  Private
export const createTask = asyncWrapper(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add task name')
    }

    const task = await Task.create({
        name: req.body.name,
        user: req.user.id
    })

    res.status(201).json(task)
})


// @desc    Change task status
// @route   PATCH /api/tasks/:id
// @access  Private
export const changeTaskStatus = asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the task user
    if(task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const changedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(changedTask)
})


// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the task user
    if(task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await task.remove()

    res.status(200).json(req.params.id)
})