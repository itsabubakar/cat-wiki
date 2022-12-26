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


// get breed images
router.route('/names')
    .get(catControllers.getBreedsName)

module.exports = router