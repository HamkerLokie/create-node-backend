import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user.routes.js'
import dotenv from 'dotenv'
import { connectDB } from './db/index.js'
import { CORS_ORGIN, PORT } from './config/index.js'

dotenv.config({
  path: './env'
})

const app = express()

connectDB()

app.use(
  cors({
    origin:CORS_ORGIN,
    credentials: true
  })
)

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

// routes

app.use('/api/v1/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`)
})
