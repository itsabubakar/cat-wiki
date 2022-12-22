const axios = require('axios')

let config = {
    headers: {
        'x-api-key': process.env.API_KEY,
    }
}

const getBreeds = async (req, res) => {
    console.log('api hit');
    const { limit, page } = req.query
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}&order=RAND`, config)
        res.send(response.data)
    } catch (error) {
        console.log(error.response)
        res.send(error.response)
    }
}

const getBreed = async (req, res) => {
    const { breed } = req.query
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${breed}`, config)
        res.send([response.data, response.data.id])
    } catch (error) {
        console.log(error.response)
        res.send(error.response)
    }
}

const getBreedImages = async (req, res) => {
    const { imgId } = req.query
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${imgId}`, config)
        res.send(response.data)
    } catch (error) {
        console.log(error.response)
        res.send(error.response)
    }
}

module.exports = {
    getBreeds,
    getBreed,
    getBreedImages
}