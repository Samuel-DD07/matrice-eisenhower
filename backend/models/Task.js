const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name_task: {type: String, required: true},
    description_task: {type: String},
    date_creation_task: {type: String, required: true},
    date_last_modify_task: {type: String, required: true},
    user_id: {type: String, required: true},
    is_important: {type: Boolean, required: true},
    is_urgence: {type: Boolean, required: true}
})

module.exports = mongoose.model('Task', TaskSchema)