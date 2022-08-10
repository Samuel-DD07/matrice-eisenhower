const express = require('express')
const TaskCtrl = require('../controllers/Task')
const router = express.Router()
const auth = require('../middleware/auth')

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.get('/:user_id', auth, TaskCtrl.dataTask)
router.get('/OneTask/:id', auth, TaskCtrl.getOneTask)
router.post('/', auth, TaskCtrl.createOneTask)
router.delete('/:id', auth, TaskCtrl.deleteOneTask)
router.put('/:id', auth, TaskCtrl.updateOneTask)

module.exports = router