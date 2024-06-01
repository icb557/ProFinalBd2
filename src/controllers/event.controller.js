export class EventController {
  createEvent = async (req, res) => {
    try {
      return res.status(201).json('created')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getAllEvents = async (req, res) => {
    try {
      return res.status(200).json('ok')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
