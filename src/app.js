import express from 'express'
import { eventRouter } from './routes/event.routes.js'

const app = express()

// routers
app.use(eventRouter)

export default app
