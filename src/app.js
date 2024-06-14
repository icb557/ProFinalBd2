import express from 'express'
import { eventRouter } from './routes/event.routes.js'

const app = express()
app.use(express.json())

// routers
app.use(eventRouter)

export default app
