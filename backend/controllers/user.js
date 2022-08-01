let allUser = require('../models/user')
const methode = require('../methods/my_fonction')

// get all user
exports.getAllUser = (req, res) => {
    res.json(methode.elementExist(allUser))
}

// get one user
exports.getOneUser = (req, res) => {
    const name_user = req.params.name_user
    const theUser = allUser.find(theUser => theUser.name_user === name_user)
    res.json(methode.elementExist(theUser))
}

// create one user
exports.createOneUser = (req, res) => {
    const id = allUser.length+1
    const createdUser = { 
        ...req.body, 
        id_user: id
    }
    allUser.push(createdUser)
    res.json(methode.elementExist(createdUser))
}

// delete one user
exports.deleteOneUser = (req, res) => {
    const id_user = parseInt(req.params.idUser)
    const deleteUser = allUser.find(theUser => theUser.id_user === id_user)
    allUser = allUser.filter(theUser => theUser !== deleteUser)
    res.json(methode.elementExist(deleteUser))
}

// update one user
exports.updateOneUser = (req, res) => {
    const id_user = parseInt(req.params.idUser)
    if (methode.elementFindUser(id_user, allUser)) {
        const updatedUser = {...req.body, id_user: id_user}
        allUser = allUser.map(theUser => {
            return theUser.id_user === id_user ? updatedUser : theUser
        })
        res.json(methode.elementExist(updatedUser))
    } else{
        res.json({message: "l'element n'existe pas"})
    }
}