const User = require('../models/User')
const lib = require('../library/my_fonction')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.dataUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json(lib.tabIsEmpty(users))
}

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password_user, 10)
    .then(hash => {
        const user = new User({
          ...req.body,
          password_user: hash,
          token: "Bearer " + jwt.sign({userId: req.body.email_user}, 'RANDOM_TOKEN_SECRET', {expiresIn: '24h'})
        })
          user.save()
          .then(data => res.status(200).json(lib.elementExist(data)))
          .catch(error => res.status(404).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}

exports.Delete = (req, res) => {
    const id = req.params.id
    User.deleteOne({
      _id: id 
    })
    .then(data => res.status(200).json(data.deletedCount))
    .catch(error => res.status(404).json({error}))
}

exports.Update = (req, res) => {
    const id = req.params.id
    User.updateOne({
      _id: id
    }, {
      ...req.body
    })
    .then(data => res.status(200).json(data.matchedCount))
    .catch(error => res.status(404).json({error}))
}

exports.OneUser = (req, res) => {
    const id = req.params.id
    User.findOne({
      _id: id
    })
    .then(data => res.status(200).json(lib.elementExist(data)))
    .catch(() => res.status(404).json({message: "l'élément n'existe pas."}))
}

exports.Auth = (req, res) => {
    User.findOne({
      email_user: req.body.email_user
    })
    .then(data => {
        const myCode = data.password_user
        bcrypt.compare(req.body.password_user, myCode)
        .then(valid => {
          if (!valid) {
            return res.status(403).json({ message: 'Paire login/mot de passe incorrecte' });
          }

          const token = "Bearer " + jwt.sign({userId: req.body.email_user}, 'RANDOM_TOKEN_SECRET', {expiresIn: '24h'})

          User.updateOne({
            _id: data._id
          }, {
              token: token
          })
          .then(() => {
            res.cookie("user_info", {
              userId: data._id,
              userName: data.name_user,
              token: token
             })
             res.status(200).json({userId: data._id})
          })
          .catch(error => res.status(404).json({error}))

        })
      .catch(error => res.status(404).json({error}))
    })
    .catch(() => res.status(500).json({message: "l'élément n'existe pas."}))
}