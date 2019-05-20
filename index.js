const express = require('express')
const app = express()


// Serve the static content
app.use(express.static('public'))


// Fire up server
app.listen(3000, () => console.log('Server running on port 3000'))