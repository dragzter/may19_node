let mongoose = require('mongoose')
let creds = require('./db-cred')

const server = creds.server
const user = creds.user
const password = creds.password
const database = creds.database

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`)


let CustomerSchema = new mongoose.Schema({
    name: String,
    color: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)