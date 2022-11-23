import { verifyToken } from '../middleware/auth.middleware.js'
import ListController from '../controller/list.controller.js'
import express from 'express'

const listRouter = express.Router()

listRouter.get('/:id', verifyToken, (req, res) => {
  ListController.getListById(req, res)
})

listRouter.post('/', verifyToken, (req, res) => {
  ListController.create(req, res)
})

listRouter.get('/', verifyToken, (req, res) => {
  ListController.getAll(req, res)
})

export default listRouter
