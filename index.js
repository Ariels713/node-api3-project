const express = require('express')

const server = express()

const postRouter = require('.api/posts/')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/post/users', postRouter)

server.listen(8001, () => console.log('Sever Running on Port 8001'))