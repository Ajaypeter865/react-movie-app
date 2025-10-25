
const API_KEY = 'a6fac9dc3e73b3eeca59de755aa893f7'
const BASE_URL = 'https://api.themoviedb.org/3'
// const BASE_URL = 'https://www.themoviedb.org/settings/api'


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}


export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
}