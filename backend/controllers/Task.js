const Task = require('../models/Task')
const lib = require('../library/my_fonction')

exports.dataTask = async (req, res) =>{
    const id = req.params.user_id
    const tasks = await Task.find({
      email_user: id
    })
    res.json(lib.tabIsEmpty(tasks))
}

exports.getOneTask = async (req, res) =>{
    const id = req.params.id
    Task.findOne({
      email_user: id
    })
    .then(data => res.json(lib.elementExist(data)))
    .catch(() => res.status(401).json({message: "l'élément n'existe pas."}))
}

exports.createOneTask = (req, res) =>{
    const task = new Task({
      ...req.body,
      date_creation_task: lib.dateNow(),
      date_last_modify_task: lib.dateNow()
    })
    task.save()
    .then(data => res.json(lib.elementExist(data)))
    .catch(error => res.status(401).json({error}))
}

exports.deleteOneTask = async (req, res) =>{
    const id = req.params.id
    const task = await Task.deleteOne({
      email_user: id
    })
    res.json(
      !!task.deletedCount ?
      "l'élément est bien supprimé."
      :
      "l'élément ne peut pas être supprimé car il n'existe pas."
    )
  }

exports.updateOneTask = (req, res) =>{
    const id = req.params.id
      Task.updateOne({
        email_user: id
      }, {
        ...req.body, _id : id
      })
      .then(data => res.json(
        !!data.matchedCount ?
        "l'élément a été bien modifié."
        :
        "l'élément ne peut pas être modifié car il n'existe pas."
        ))
      .catch(error => res.status(401).json({error}))
}