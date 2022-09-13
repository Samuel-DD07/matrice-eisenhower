const Task = require('../models/Task')
const lib = require('../library/my_fonction')

exports.dataTask = async (req, res) =>{
    const id = req.params.user_id
    const tasks = await Task.find({
      user_id: id
    })
    res.status(200).json(lib.tabIsEmpty(tasks))
}

exports.getOneTask = async (req, res) =>{
    const id = req.params.id
    Task.findOne({
      _id: id
    })
    .then(data => res.status(200).json(lib.elementExist(data)))
    .catch(() => res.status(404).json({message: "l'élément n'existe pas."}))
}

exports.createOneTask = (req, res) =>{
    const task = new Task({
      ...req.body,
      date_creation_task: lib.dateNow(),
      date_last_modify_task: lib.dateNow()
    })
    task.save()
    .then(data => res.status(200).json(lib.elementExist(data)))
    .catch(error => res.status(404).json({error}))
}

exports.deleteOneTask = async (req, res) =>{
    const id = req.params.id
    const task = await Task.deleteOne({
      _id: id
    })
    res.status(200).json(
      !!task.deletedCount ?
      "l'élément est bien supprimé."
      :
      "l'élément ne peut pas être supprimé car il n'existe pas."
    )
  }

exports.updateOneTask = (req, res) =>{
    const id = req.params.id
      Task.updateOne({
        _id: id
      }, {
        ...req.body, _id : id
      })
      .then(data => res.status(200).json(
        !!data.matchedCount ?
        "l'élément a été bien modifié."
        :
        "l'élément ne peut pas être modifié car il n'existe pas."
        ))
      .catch(error => res.status(404).json({error}))
}