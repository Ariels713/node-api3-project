const express = require('express')
const server = express()

const postRouter = require('./posts/postRouter')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/api/posts', postRouter)

server.listen(8001, () => console.log('Sever Running on Port 8001'))


