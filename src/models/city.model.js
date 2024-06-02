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

export const City = model('City', citySchema)
