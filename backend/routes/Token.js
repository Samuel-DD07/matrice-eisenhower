const express = require('express')
const router = express.Router()
const TokenCtrl = require('../controllers/Token')

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.get('/:id', TokenCtrl.getToken)
router.put('/:id', TokenCtrl.updateToken)


module.exports = router