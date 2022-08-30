const express = require('express')
const CookiesCtrl = require('../controllers/Cookies')
const router = express.Router()

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.get('/', CookiesCtrl.getCookies)
router.get('/clear', CookiesCtrl.clearCookies)


module.exports = router