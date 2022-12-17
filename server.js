const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 8080

app.use('/api', require('./routes/catRoute'))

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))