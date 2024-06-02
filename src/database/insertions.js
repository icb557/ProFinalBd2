import { Person } from '../models/person.model.js'
import { City } from '../models/city.model.js'

export const populateDB = async () => {
  try {
    const city1 = new City({ name: 'New York', state: 'NY', country: 'USA' })
    const city2 = new City({ name: 'Los Angeles', state: 'CA', country: 'USA' })

    await city1.save()
    await city2.save()

    const person1 = new Person({
      userName: 'john_doe',
      firstName: 'John',
      lastName1: 'Doe',
      lastName2: 'Smith',
      role: 'User',
      email: 'john@example.com',
      city: city1._id
    })

    const person2 = new Person({
      userName: 'jane_doe',
      firstName: 'Jane',
      lastName1: 'Doe',
      lastName2: 'Smith',
      role: 'Admin',
      email: 'jane@example.com',
      city: city2._id
    })

    await person1.save()
    await person2.save()

    console.log('Database seeded with initial data')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
