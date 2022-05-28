import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'must provide name'],
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

const Task = mongoose.model('Task', taskSchema)
export default Task