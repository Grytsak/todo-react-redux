import Task from '../models/Task.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

export const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json(tasks)
})

export const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
})

export const changeTaskStatus = asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    
    const changedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(changedTask)
})

export const deleteTask = asyncWrapper(async (req, res, next) => {
    // const { id: taskID } = req.params
    // const task = await Task.findOneAndDelete({ _id: taskID })
    // if (!task) {
    //   return next(createCustomError(`No task with id : ${taskID}`, 404))
    // }
    // res.status(200).json({task})

    const task = await Task.findById(req.params.id)
    await task.remove()

    res.status(200).json(req.params.id)
})