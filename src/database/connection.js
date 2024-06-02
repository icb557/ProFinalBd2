import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://localhost/proFinalBd2'

export const DBConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
    })
    console.log('database connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}
