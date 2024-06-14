// import { City } from '../models/city.model.js'
import { Event } from '../models/event.model.js'

export class EventController {
  createEvent = async (req, res) => {
    try {
      const { title, place, date } = req.body
      const event = await Event.findOne({ title, place, date })
      if (!event) {
        const newEvent = await Event.create(req.body)
        return res.status(201).json(newEvent)
      }
      return res.status(400).json('Event duplicated')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getAllEvents = async (req, res) => {
    try {
      const event = await Event.find()
      return res.status(200).json(event)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await Event.findById(id)
      if (event) { return res.status(200).json(event) }
      return res.status(404).json('Event not found')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await Event.findByIdAndUpdate(id, req.body)
      if (event) {
        return res.status(200).json(event)
      }
      return res.status(404).json('Event not found')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await Event.findByIdAndDelete(id)
      if (event) {
        return res.status(200).json(event)
      }
      return res.status(404).json('Event not found')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
