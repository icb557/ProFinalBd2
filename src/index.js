import app from './app.js'
import { DBConnection } from './database/connection.js'

const PORT = process.env.PORT || 3000
await DBConnection()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
