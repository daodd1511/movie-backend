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

const update = async (req, res) => {
  try {
    const list = await ListService.update(req.params.id, req.body)
    res.status(200).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const remove = async (req, res) => {
  try {
    await ListService.delete(req.params.id)
    res.status(200).send({ message: 'List deleted successfully' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const addMovie = async (req, res) => {
  try {
    const list = await ListService.addMovie(req.params.id, req.body.mediaId)
    res.status(200).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const removeMovie = async (req, res) => {
  try {
    const list = await ListService.removeMovie(req.params.id, req.body.mediaId)
    res.status(200).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const addTv = async (req, res) => {
  try {
    const list = await ListService.addTv(req.params.id, req.body.mediaId)
    res.status(200).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const removeTv = async (req, res) => {
  try {
    const list = await ListService.removeTv(req.params.id, req.body.mediaId)
    res.status(200).send(list)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const UserController = {
  getListById,
  create,
  getAll,
  update,
  remove,
  addMovie,
  removeMovie,
  addTv,
  removeTv
}
export default UserController
