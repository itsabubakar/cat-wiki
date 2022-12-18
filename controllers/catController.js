const axios = require('axios')

let config = {
    headers: {
        'x-api-key': process.env.API_KEY,
    }
}

const getTopTen = async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0', config)
        // console.log(response);
        res.send(response.data)
    } catch (error) {
        console.log(error.response.data)
        res.send(error.response.data)
    }
}

module.exports = {
    getTopTen
}