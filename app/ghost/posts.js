import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  makeRequest: async ({url, method, params, headers}) => {
    const apiUrl = new URL(url)
    Object.keys(params).map(key => apiUrl.searchParams.set(key, params[key]))
    try {
      const response = await fetch(apiUrl.toString(), {method, headers})
      const data = await response.json()
      return {data}
    } catch (error) {
      console.error(error)
    }
  },
  version: 'v5.0',
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      formats: 'plaintext',
    })
    .catch(error => {
      console.log(error)
    })
}

export async function getPost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      formats: 'plaintext',
    })
    .catch(error => {
      console.log(error)
    })
}
