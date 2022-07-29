const methode = require('../methods/my_fonction')

const allTask = [
    {
        id_task: 1,
        id_user_task: "TBL",
        name_task: "Faire à manger",
        date_creation_task: methode.dateNow(),
        description_task: "Faire des pates avec du steak pour 5 personnes",
        Urgent_task: false,
        Importance_task: true
    }
]

module.exports = allTask