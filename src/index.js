import app from './app.js'

try {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`)
  })
} catch (error) {
  console.error('Error connecting to the database', error)
}
