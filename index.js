const express = require('express')
const server = express()
const port = process.env.port || 8001
// const morgan = require('morgan')
const logger = require('./middleware/logger')
const postRouter = require('./posts/postRouter')

server.use(logger("custom"))
server.use(express.json())
// server.use(morgan('dev'))

server.use(express.urlencoded({ extended: true }))
server.use('/api/posts', postRouter)

server.listen(port, () => console.log('Sever Running on Port 8001'))


