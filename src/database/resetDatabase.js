import mongoose from 'mongoose'
import { DBConnection } from './connection.js'
import { populateDB } from './insertions.js'

const resetDatabase = async () => {
  try {
    await DBConnection()
    await mongoose.connection.db.dropDatabase()
    console.log('Database dropped')
    await populateDB()
    console.log('Database populated with initial data')
    process.exit(0)
  } catch (error) {
    console.error('Error resetting database:', error)
    process.exit(1)
  }
}

resetDatabase()
