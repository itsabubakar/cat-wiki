require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())


app.use('/api', require('./routes/catRoute'))

// * Serve static assets in production, must be at this location of this file

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

const PORT = 8080

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))