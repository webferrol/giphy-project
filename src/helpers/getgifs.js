import { API_KEY, URL } from '../constants'

export async function getGifs (categoryValue, perPage = 0, limit = 25) {
  const offset = perPage * limit
  const response = await fetch(`${URL}?api_key=${API_KEY}&q=${categoryValue}&limit=${limit}&offset=${offset}`)
  const { data } = await response.json()
  const images = data?.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url
    }
  })
  return images
}
