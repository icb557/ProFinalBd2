import { Schema, model } from 'mongoose'

export const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
})

const placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: citySchema
})

export const personSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: String,
  lastName1: {
    type: String,
    required: true
  },
  lastName2: String,
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: citySchema,
    required: true
  }
})

export const commentSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

export const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  place: {
    type: placeSchema,
    required: true
  },
  lecturers: {
    type: [personSchema],
    required: true
  },
  audience: {
    type: [personSchema],
    required: true
  },
  faculty: {
    type: String,
    required: true
  },
  program: {
    type: String
  },
  comments: {
    type: [commentSchema],
    required: true
  }
})

// eventSchema.pre('save', async function (next) {
//   const existingEvent = await Event.findOne({ title: this.title, place: this.place, date: this.date })
//   console.log(this, existingEvent)
//   if (existingEvent) {
//     const err = new Error('Event already exists.')
//     next(err)
//   } else {
//     next()
//   }
// })

export const Event = model('Event', eventSchema)
