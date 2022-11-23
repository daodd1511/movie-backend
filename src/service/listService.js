import List from '../model/list.js'

const ListService = {}

ListService.getAll = async () => {
  return await List.find()
}

ListService.getListById = async (id) => {
  const list = await List.findOne({ _id: id })
  if (!list) {
    throw new Error('List not found')
  }
  return list
}

ListService.create = async (listDetail) => {
  const list = new List({
    name: listDetail.name,
    description: listDetail.description
  })
  return await list.save()
}

ListService.update = async (listId, listDetail) => {
  return await List.findByIdAndUpdate(listId, listDetail)
}

ListService.delete = async (id) => {
  return await List.findByIdAndRemove(id)
}

ListService.addMovie = async (listId, movieId) => {
  const list = await List.findOne({ _id: listId })
  if (list.movies.includes(movieId)) {
    throw new Error('Movie already in list')
  } else {
    list.movies.push(movieId)
    return await list.save()
  }
}

ListService.removeMovie = async (listId, movieId) => {
  const list = await List.findOne({ _id: listId })
  if (list.movies.includes(movieId)) {
    const index = list.movies.indexOf(movieId)
    list.movies.splice(index, 1)
    return await list.save()
  } else {
    throw new Error('Movie not in list')
  }
}

ListService.addTv = async (listId, tvId) => {
  const list = await List.findOne({ _id: listId })
  if (list.tvShows.includes(tvId)) {
    throw new Error('Tv already in list')
  } else {
    list.tvShows.push(tvId)
    return await list.save()
  }
}

ListService.removeTv = async (listId, tvId) => {
  const list = await List.findOne({ _id: listId })
  if (list.tvShows.includes(tvId)) {
    const index = list.tvShows.indexOf(tvId)
    list.tvShows.splice(index, 1)
    return await list.save()
  } else {
    throw new Error('Tv not in list')
  }
}

ListService.clear = async (listId) => {
  const list = await List.findOne({ _id: listId })
  list.movies = []
  list.tvShows = []
  return await list.save()
}
export default ListService
