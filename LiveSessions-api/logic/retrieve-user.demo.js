require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    retrieveUser('5fb7f43bcf65c468175af431', console.log)
})