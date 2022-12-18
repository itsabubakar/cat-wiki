const express = require('express')
const router = express.Router()
const catControllers = require('../controllers/catController')

router.route('/')
    .get(catControllers.getTopTen)

module.exports = router

// popular breed route
// top 10 breed route
