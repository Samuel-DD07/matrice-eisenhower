const express = require('express')
const UserCtrl = require('../controllers/User')
const router = express.Router()

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.get('/', UserCtrl.dataUser)
router.get('/:id', UserCtrl.OneUser)
router.post('/auth', UserCtrl.Auth)
router.post('/', UserCtrl.Login)
router.delete('/:id', UserCtrl.Delete)
router.put('/:id', UserCtrl.Update)

module.exports = router 