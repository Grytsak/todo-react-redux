import express from 'express'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import taskRoutes from './routes/tasks.js'
import usersRoutes from './routes/users.js'


const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/tasks', taskRoutes)
app.use('/api/users', usersRoutes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
  