const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const userCtrl =  require('./controllers/user')
const taskCtrl = require('./controllers/task')

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app
    .get('/api/:idUser', taskCtrl.getAllTask)
    .get('/api/:idUser/:idTask', taskCtrl.getOneTask)
    .post('/api/:idUser', taskCtrl.createOnetask)
    .delete('/api/:idUser/:idTask', taskCtrl.deleteOneTask)
    .put('/api/:idUser/:idTask', taskCtrl.updateOneTask)

app
    .get('/users', userCtrl.getAllUser)
    .get('/users/:name_user', userCtrl.getOneUser)
    .post('/users', userCtrl.createOneUser)
    .delete('/users/:idUser', userCtrl.deleteOneUser)
    .put('/user/:idUser', userCtrl.updateOneUser)

app.listen(port, console.log(`server lancé au port ${port}`))