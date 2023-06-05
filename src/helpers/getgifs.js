import { API_KEY, URL } from '../constants'

export async function getGifs (categoryValue, nextPage = 0, limit = 10) {
  const offset = limit + (nextPage * limit)
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
