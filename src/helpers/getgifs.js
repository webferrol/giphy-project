
const URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = '4BFI0aVvcMzMKxLr8t7zDEoc9tYIztA5'
export async function getGifs (categoryValue, limit = 8) {
  const response = await fetch(`${URL}?api_key=${API_KEY}&q=${categoryValue}&limit=${limit}`)
  const { data } = await response.json()
  const images = data?.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url
    }
  })
  console.log(images)
  return images
}
