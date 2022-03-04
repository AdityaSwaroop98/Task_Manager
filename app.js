// Routing Stratiges 

// app.get('/api/v1/tasks')  -- getAllTasks
// app.post('/api/v1/tasks') -- create a new tasks
// app.get('/api/v1/tasks:id') -- get a single task
// app.patch('/api/v1/tasks/:id') -- update task
// app.delete('/api/v1/tasks/:id') -- delete a task









console.log("Task Manager App")


const express = require('express');
const { getAllTasks } = require('./controller/tasks');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


// Middleware 
app.use(express.static('./public'))
app.use(express.json())




// Routes 
app.use('/api/v1/tasks', tasks)








const port = 3000


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is Listening On Port No : ${port} `))
    } catch (error) {
        console.log(error)
    }
}
start()