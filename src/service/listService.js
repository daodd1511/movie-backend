import UserService from './userService.js'

const ListService = {}

ListService.getAll = async (userId) => {
  const user = await UserService.getUserById(userId)
  return user.lists
}

ListService.getListById = async (userId, id) => {
  const user = await UserService.getUserById(userId)
  console.log(user.lists)
  const list = user.lists.find((list) => list._id.toString() === id)
  if (!list) {
    throw new Error('List not found')
  }
  return list
}

ListService.create = async (userId, listDetail) => {
  const user = await UserService.getUserById(userId)
  user.lists.push(listDetail)
  await user.save()
  return user.lists.find((list) => list._id.toString() === listDetail._id)
}

ListService.update = async (userId, listId, listDetail) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  const newList = { ...list, ...listDetail }
  user.lists = user.lists.map((list) => {
    if (list._id.toString() === listId) {
      return newList
    }
    return list
  })
  await user.save()
  return newList
}

ListService.delete = async (userId, id) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === id)
  if (!list) {
    throw new Error('List not found')
  }
  user.lists = user.lists.filter((list) => list._id.toString() !== id)
  await user.save()
}

ListService.addMovie = async (userId, listId, movieId) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  if (list.movies.includes(movieId)) {
    throw new Error('Movie already in list')
  }
  list.movies.push(movieId)
  await user.save()
  return list
}

ListService.removeMovie = async (userId, listId, movieId) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  if (!list.movies.includes(movieId)) {
    throw new Error('Movie not in list')
  }
  list.movies = list.movies.filter((movie) => movie !== movieId)
  await user.save()
  return list
}

ListService.addTv = async (userId, listId, tvId) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  if (list.tvShows.includes(tvId)) {
    throw new Error('Tv already in list')
  }
  list.tvShows.push(tvId)
  await user.save()
  return list
}

ListService.removeTv = async (userId, listId, tvId) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  if (!list.tvShows.includes(tvId)) {
    throw new Error('Tv not in list')
  }
  list.tvShows = list.tvShows.filter((tv) => tv !== tvId)
  await user.save()
  return list
}

ListService.clear = async (userId, listId) => {
  const user = await UserService.getUserById(userId)
  const list = user.lists.find((list) => list._id.toString() === listId)
  if (!list) {
    throw new Error('List not found')
  }
  list.movies = []
  list.tvShows = []
  await user.save()
  return list
}
export default ListService
