const User = require('../models/User')
const lib = require('../library/my_fonction')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.dataUser = async (req, res) => {
    const users = await User.find()
    res.json(lib.tabIsEmpty(users))
}

exports.signup = (req, res) => {
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
    .catch(() => res.status(500).json({error}))
}

exports.Delete = (req, res) => {
    const id = req.params.id
    console.log(id)
    User.deleteOne({
      email_user: id 
    })
    .then(data => res.json(data.deletedCount))
    .catch(error => res.status(401).json({error}))
}

exports.Update = (req, res) => {
    const id = req.params.id
    User.updateOne({
      email_user: id
    }, {
      ...req.body
    })
    .then(data => res.json(data.matchedCount))
    .catch(error => res.status(401).json({error}))
}

exports.OneUser = (req, res) => {
    const id = req.params.id
    User.findOne({
      email_user: id
    })
    .then(data => res.json(lib.elementExist(data)))
    .catch(() => res.status(401).json({message: "l'élément n'existe pas."}))
}

exports.login = (req, res) => {
    User.findOne({
      user_email: req.body.email_user
    })
    .then(data => lib.elementExist(data))
      .then(data => {
        const myCode = data.element.password_user
        bcrypt.compare(req.body.password_user, myCode)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
          }
          res.status(200).json({
              userId: data.element._id,
              token: jwt.sign(
                  {userId: data.element._id},
                  'RANDOM_TOKEN_SECRET',
                  {expiresIn: '24h'}
              )
          })
        })
        .catch(error => res.status(401).json({error}))
      })
    .catch(() => res.status(500).json({message: "l'élément n'existe pas."}))
}