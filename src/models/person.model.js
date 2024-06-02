import { Schema, model, SchemaTypes } from 'mongoose'
// eslint-disable-next-line no-unused-vars
import { City } from './city.model.js'

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
  lastName2: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: SchemaTypes.ObjectId,
    ref: 'City',
    required: true
  }
})

export const Person = model('Person', personSchema)
