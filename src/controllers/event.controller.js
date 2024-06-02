// import { City } from '../models/city.model.js'
import { Person } from '../models/person.model.js'

export class EventController {
  createEvent = async (req, res) => {
    try {
      const newPerson = {
        userName: 'pedro1',
        firstName: 'pedro',
        lastName1: 'rios',
        lastName2: 'perez',
        role: 'asistente',
        email: 'pedro@gmail.com',
        city: '665bb7b6aed0f0d0b2e6ba3f'
      }
      const person = await Person.create(newPerson)
      // const newCity = {
      //   name: 'Medellin',
      //   state: 'Antioquia',
      //   country: 'Colombia'
      // }
      // const city = await City.create(newCity)
      return res.status(201).json(person)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getAllEvents = async (req, res) => {
    try {
      const people = await Person.find().populate('city').exec()
      return res.status(200).json(people)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
