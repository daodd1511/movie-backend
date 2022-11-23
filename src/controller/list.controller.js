import ListService from '../service/listService.js'

const getAll = async (req, res) => {
  try {
    const lists = await ListService.getAll()
    res.status(200).send(lists)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const getListById = async (req, res) => {
  try {
    await ListService.getListById(req.params.id).then((list) => {
      res.status(200).send(list)
    })
  } catch (err) {
    res.json({ message: 'List not found!' })
  }
}

const create = async (req, res) => {
  try {
    const list = await ListService.create(req.body)
    res.status(201).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const UserController = {
  getListById,
  create,
  getAll
}
export default UserController
