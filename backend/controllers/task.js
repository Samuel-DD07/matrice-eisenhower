let allTask = require('../models/task')
const methode = require('../methods/my_fonction')

// get all task
exports.getAllTask = (req, res) => {
    const user = parseInt(req.params.idUser)
    const Mytask = allTask.filter(onetask => onetask.id_user_task === user)
    res.json(methode.elementExist(Mytask))
}

// get one task
exports.getOneTask = (req, res) => {
    const id_task = parseInt(req.params.idTask)
    const id_user = parseInt(req.params.idUser)
    const theTask = allTask.find(theTask => theTask.id_task === id_task && theTask.id_user_task === id_user)
    res.json(methode.elementExist(theTask))
}

// create one task
exports.createOnetask = (req, res) => {
    const id_user = parseInt(req.params.idUser)
    const id = allTask.length+1
    const createdTask = { 
        ...req.body, 
        id_user_task: id_user, 
        id_task: id,
        date_creation_task: methode.dateNow()
    }
    allTask.push(createdTask)
    res.json(methode.elementExist(createdTask))
}

// delete one task
exports.deleteOneTask = (req, res) => {
    const id_user = parseInt(req.params.idUser)
    const id_task = parseInt(req.params.idTask)
    const task_delete = allTask.find(
            task => task.id_task === id_task 
            &&
            task.id_user_task === id_user
        )
    allTask = allTask.filter(task => task !== task_delete)
    res.json(methode.elementExist(task_delete))
}

// update one task
exports.updateOneTask = (req, res) => {
    const id_user = parseInt(req.params.idUser)
    const id_task = parseInt(req.params.idTask)
    if (methode.elementFindTask(id_task, allTask)) {
        const updatedTask = {...req.body, id_user_task: id_user, id_task: id_task}
        allTask = allTask.map(task => {
            return task.id_task === id_task ? updatedTask : task
        })
        res.json(methode.elementExist(updatedTask))
    } else{
        res.json({message: "l'element n'existe pas"})
    }
}