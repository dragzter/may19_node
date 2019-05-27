const express = require('express')
const app = express()

// Routes
let personRoute = require('./server/routes/person')
let customerRoute = require('./server/routes/customer')

let path = require('path')

let bodyParser = require('body-parser')

app.use(bodyParser.json())



// Middleware chain
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)

    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// 404 - Not Found
app.use((req, res, next) => {
    res.status(404).send('Not Found - 404')
})

// Handler for error 500
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.sendFile(path.join(__dirname, 'public/500.html'))
})

// Server port config
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))