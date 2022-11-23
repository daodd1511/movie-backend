import List from '../model/list.js'

const ListService = {}

ListService.getAll = async () => {
  return await List.find()
}

ListService.getListById = async (id) => {
  return await List.findOne({ _id: id })
}

ListService.create = async (listDetail) => {
  const list = new List({
    name: listDetail.name,
    description: listDetail.description,
    movies: listDetail.movies,
    tvs: listDetail.tvs
  })
  return await list.save()
}

ListService.update = async (listDetail) => {
  return await List.findByIdAndUpdate(listDetail._id, listDetail)
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
  if (list.tvs.includes(tvId)) {
    throw new Error('Tv already in list')
  } else {
    list.tvs.push(tvId)
    return await list.save()
  }
}

ListService.removeTv = async (listId, tvId) => {
  const list = await List.findOne({ _id: listId })
  if (list.tvs.includes(tvId)) {
    const index = list.tvs.indexOf(tvId)
    list.tvs.splice(index, 1)
    return await list.save()
  } else {
    throw new Error('Tv not in list')
  }
}

ListService.clear = async (listId) => {
  const list = await List.findOne({ _id: listId })
  list.movies = []
  list.tvs = []
  return await list.save()
}
export default ListService