const express = require('express')
const router = express.Router()
const catControllers = require('../controllers/catController')

router.route('/')
    .get(catControllers.getBreeds)

// get one breed
router.route('/breed')
    .get(catControllers.getBreed)

// get breed images
router.route('/images')
    .get(catControllers.getBreedImages)

module.exports = router