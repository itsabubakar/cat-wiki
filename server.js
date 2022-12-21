require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 8080
const cors = require('cors')

app.use(cors())


app.use('/api', require('./routes/catRoute'))

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))