
const URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = '4BFI0aVvcMzMKxLr8t7zDEoc9tYIztA5'
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
