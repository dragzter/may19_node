let mongoose = require('mongoose')

const server = 'cluster0-cck6j.mongodb.net'
const user = 'vlad'
const password = 'may19node'
const database = 'test'

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`)


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)