const express = require('express')
const server = express()

// const morgan = require('morgan')
const logger = require('./middleware/logger')
const postRouter = require('./posts/postRouter')

server.use(logger("custom"))
server.use(express.json())
// server.use(morgan('dev'))

server.use(express.urlencoded({ extended: true }))
server.use('/api/posts', postRouter)

server.listen(8001, () => console.log('Sever Running on Port 8001'))


