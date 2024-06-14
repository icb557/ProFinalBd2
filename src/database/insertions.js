// import { Comment } from '../models/comment.model.js'
import { Event } from '../models/event.model.js'
// import { Person } from '../models/person.model.js'

export const populateDB = async () => {
  try {
    // People data
    // const people = await Person.create([
    //   {
    //     userName: 'john_doe',
    //     firstName: 'John',
    //     lastName1: 'Doe',
    //     lastName2: 'Smith',
    //     role: 'User',
    //     email: 'john@example.com',
    //     city: {
    //       name: 'Medellín',
    //       state: 'Antioquia',
    //       country: 'Colombia'
    //     }
    //   },
    //   {
    //     userName: 'jane_doe',
    //     firstName: 'Jane',
    //     lastName1: 'Doe',
    //     lastName2: 'Smith',
    //     role: 'Admin',
    //     email: 'jane@example.com',
    //     city: {
    //       name: 'Medellín',
    //       state: 'Antioquia',
    //       country: 'Colombia'
    //     }
    //   }
    // ])

    // // Comments data
    // const comments = await Comment.create([
    //   {
    //     user: people[0]._id,
    //     text: 'hahahahahahahahahaha'
    //   },
    //   {
    //     user: people[1]._id,
    //     text: 'ooooooooooooooooooooo'
    //   }
    // ])

    // // Events data
    // await Event.create([
    //   {
    //     title: 'Evento1',
    //     description: 'rrrrrrrrrrrrrrrr',
    //     categories: ['hola', 'mundo'],
    //     date: new Date(),
    //     place: {
    //       name: 'Coliseo',
    //       address: '123 Main St',
    //       city: {
    //         name: 'Medellín',
    //         state: 'Antioquia',
    //         country: 'Colombia'
    //       }
    //     },
    //     lecturers: people.map(p => p._id),
    //     audience: people.map(p => p._id),
    //     faculty: 'Ingeniería',
    //     program: 'Ingeniería Informática',
    //     comments: comments.map(c => c._id)
    //   }
    // ])

    await Event.create({
      title: 'Evento1',
      description: 'rrrrrrrrrrrrrrrr',
      categories: ['hola', 'mundo'],
      date: new Date(),
      place: {
        name: 'Coliseo',
        address: '123 Main St',
        city: {
          name: 'Medellín',
          state: 'Antioquia',
          country: 'Colombia'
        }
      },
      lecturers: [
        {
          userName: 'john_doe',
          firstName: 'John',
          lastName1: 'Doe',
          lastName2: 'Smith',
          role: 'User',
          email: 'john@example.com',
          city: {
            name: 'Medellín',
            state: 'Antioquia',
            country: 'Colombia'
          }
        },
        {
          userName: 'jane_doe',
          firstName: 'Jane',
          lastName1: 'Doe',
          lastName2: 'Smith',
          role: 'Admin',
          email: 'jane@example.com',
          city: {
            name: 'Medellín',
            state: 'Antioquia',
            country: 'Colombia'
          }
        }
      ],
      audience: [
        {
          userName: 'john_doe',
          firstName: 'John',
          lastName1: 'Doe',
          lastName2: 'Smith',
          role: 'User',
          email: 'john@example.com',
          city: {
            name: 'Medellín',
            state: 'Antioquia',
            country: 'Colombia'
          }
        },
        {
          userName: 'jane_doe',
          firstName: 'Jane',
          lastName1: 'Doe',
          lastName2: 'Smith',
          role: 'Admin',
          email: 'jane@example.com',
          city: {
            name: 'Medellín',
            state: 'Antioquia',
            country: 'Colombia'
          }
        }
      ],
      faculty: 'Ingeniería',
      program: 'Ingeniería Informática',
      comments: [
        {
          user: 'juan@gmail.com',
          text: 'hahahahahahahahahaha'
        },
        {
          user: 'juan@gmail.com',
          text: 'ooooooooooooooooooooo'
        }
      ]
    })

    console.log('Database seeded with initial data')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
