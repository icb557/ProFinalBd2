import { Router } from 'express'

import { EventController } from '../controllers/event.controller.js'

const eventController = new EventController()
export const eventRouter = Router()

eventRouter.post('/api/event', eventController.createEvent)
eventRouter.get('/api/event', eventController.getAllEvents)
// eventRouter.get('/api/event/:id', eventController.getEvent)
// eventRouter.put('/api/event/:id', eventController.updateEvent)
// eventRouter.delete('/api/event/:id', eventController.deleteEvent)
