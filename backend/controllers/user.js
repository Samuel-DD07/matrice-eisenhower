const User = require('../models/User')
const lib = require('../library/my_fonction')
const bcrypt = require('bcrypt')

exports.dataUser = async (req, res) => {
    const users = await User.find()
    res.json(lib.tabIsEmpty(users))
}

exports.Login = (req, res) => {
    bcrypt.hash(req.body.password_user, 10)
    .then(async (hash) => {
        const user = new User({
          ...req.body,
          password_user: hash
        })
          await user.save()
          .then(data => res.json(lib.elementExist(data)))
          .catch(() => res.status(401).json({error: "cette identifiant existe déjà."}))
    })
}

exports.Delete = async (req, res) => {
    const id = req.params.id
    const user = await User.deleteOne({
      _id: id 
    })
    res.json(
      !!user.deletedCount ?
      "l'élément est bien supprimé."
      :
      "l'élément ne peut pas être supprimé car il n'existe pas."
    )
  }

exports.Update = (req, res) => {
    const id = req.params.id
    User.updateOne({
      _id: id
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

  exports.OneUser = (req, res) => {
    const id = req.params.id
    User.findOne({
      _id: id
    })
    .then(data => res.json(lib.elementExist(data)))
    .catch(() => res.status(401).json({message: "l'élément n'existe pas."}))
  }