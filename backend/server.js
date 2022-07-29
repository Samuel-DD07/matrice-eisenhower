const express = require('express')
const allTask = require('./models/task')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const methode = require('./methods/my_fonction')

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get all task
app.get('/', (req, res) => {
    res.json(methode.elementExist(allTask))
})

// get one task
app.get('/api/:idTask', (req, res) => {
    const id_task = parseInt(req.params.idTask)
    const theTask = allTask.find(theTask => theTask.id_task === id_task)
    res.json(methode.elementExist(theTask))
})

// create one task
app.post('/api/:idUser', (req, res) => {
    const user = req.params.idUser
    const id = allTask.length+1
    const createdTask = { 
        ...req.body, 
        id_user_task: user, 
        id_task: id,
        date_creation_task: methode.dateNow()
    }
    allTask.push(createdTask)
    res.json(methode.elementExist(createdTask))
})

// create a app with methode delete for delete one task with the task's id and user's id
// delete one task
app.delete('/api/:idUser/:idTask', (req, res) => {

})

app.listen(port, console.log(`server lancé au port ${port}`))