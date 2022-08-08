const User = require('../models/User')
const lib = require('../library/my_fonction')
const bcrypt = require('bcrypt')

exports.dataUser = async (req, res) => {
    const users = await User.find()
    res.json(lib.tabIsEmpty(users))
}

exports.Login = (req, res) => {
    bcrypt.hash(req.body.password_user, 10)
    .then(hash => {
        const user = new User({
          ...req.body,
          password_user: hash
        })
          user.save()
          .then(data => res.json(lib.elementExist(data)))
          .catch(error => res.status(401).json({error}))
    })
    .catch(() => res.status(401).json({error}))
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

  exports.Auth = (req, res) => {
    User.findOne({
      user_email: req.body.email_user
    })
    .then(data => lib.elementExist(data))
      .then(data => {
        const myCode = data.element.password_user
        bcrypt.compare(req.body.password_user, myCode)
        .then(valid => res.json(valid))
        .catch(error => res.status(401).json({error}))
      })
    .catch(() => res.status(401).json({message: "l'élément n'existe pas."}))
  }