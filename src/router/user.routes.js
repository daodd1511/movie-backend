import { verifyToken } from '../middleware/auth.middleware.js'
import UserController from '../controller/user.controller.js'
import express from 'express'

const userRouter = express.Router()

userRouter.get('/:id', verifyToken, (req, res) => {
  UserController.getUserById(req, res)
})
userRouter.put('/update/:id', verifyToken, (req, res) => {
  UserController.updateUser(req, res)
})

userRouter.get('/profile', verifyToken, (req, res) => {
  UserController.getUserById(req, res)
})
// userRouter.delete(
//   '/delete/:id',
//   [auth.verifyToken],
//   (req, res) => {
//     UserController.deleteUser(req, res)
//   }
// )

export default userRouter
