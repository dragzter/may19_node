const express = require('express')
const app = express()

// Routes
let personRoute = require('./server/routes/person')

app.use(personRoute)

// Serve the static content
app.use(express.static('public'))


// Server port config
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))