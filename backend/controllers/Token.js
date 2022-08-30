const User = require('../models/User')
const lib = require('../library/my_fonction')
const jwt = require('jsonwebtoken')

exports.getToken = (req, res) => {
    const id = req.params.id
    User.findOne({
      _id: id
    })
    .then(data => res.json(lib.elementExist(data.token)))
    .catch(error => res.status(400).json({error}))
  }

exports.updateToken = (req, res) => {
    const id = req.params.id
    const token = "Bearer " + jwt.sign({userId: req.body.email_user}, 'RANDOM_TOKEN_SECRET', {expiresIn: '24h'})
    User.updateOne({
        _id: id
    }, {
        token: token
    })
    .then(() => res.json(lib.elementExist(token)))
    .catch(error => res.status(400).json({error}))
}