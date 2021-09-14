const express = require('express')
const path = require('path')
const fs = require('fs')

const db = require('./dataBase').getInstance()
const dotenv = require('dotenv')
const app = express()

db.setModels()
dotenv.config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const { userRouter, authRouter } = require('./routes')

app.use('/users', userRouter)
app.use('/auth', authRouter)

app.use('*', (err, req, res, next) => {
  res.status(err.code || 500).json({
    message: err.message,
    ok: false,
  })
})

app.listen(PORT, () => {
  console.log(`server start on PORT=${PORT}`)
})
