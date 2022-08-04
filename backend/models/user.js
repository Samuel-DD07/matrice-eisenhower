const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name_user: {type: String, required: true},
    email_user: {type: String, required: true, unique: true},
    password_user: {type: String, required: true}
})

module.exports = mongoose.model('User', UserSchema)