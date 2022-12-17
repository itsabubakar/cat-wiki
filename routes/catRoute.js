const express = require('express')
const router = express.Router()
const axios = require('axios')

router.route('/')
    .get(async (req, res) => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/favourites')
            console.log(response.data);
            res.send(response.data)
        } catch (error) {
            console.log(error.response.data)
            res.send(error.response.data)
        }
    })

module.exports = router

// popular breed route
// top 10 breed route
