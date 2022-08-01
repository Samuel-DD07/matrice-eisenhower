const methode = require('../methods/my_fonction')

const allTask = [
    {
        id_task: 1,
        id_user_task: 1,
        name_task: "Faire à manger",
        date_creation_task: methode.dateNow(),
        description_task: "Faire des pates avec du steak pour 5 personnes",
        Urgent_task: false,
        Importance_task: true
    },
    {
        id_task: 2,
        id_user_task: 1,
        name_task: "Faire mes devoirs",
        date_creation_task: methode.dateNow(),
        description_task: "test",
        Urgent_task: true,
        Importance_task: true
    },
    {
        id_task: 3,
        id_user_task: 1,
        name_task: "Faire à test",
        date_creation_task: methode.dateNow(),
        description_task: "test",
        Urgent_task: false,
        Importance_task: false
    },
    {
        id_task: 4,
        id_user_task: 1,
        name_task: "Faire à test",
        date_creation_task: methode.dateNow(),
        description_task: "test",
        Urgent_task: true,
        Importance_task: false
    },
]

module.exports = allTask