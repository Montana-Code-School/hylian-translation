import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getFavorites () {
    return this.execute('get', '/favorites')
  },
  getFavorite (id) {
    return this.execute('get', `/favorites/${id}`)
  },
  createFavorite (data) {
    return this.execute('post', '/favorites', data)
  },
  updateFavorite (id, data) {
    return this.execute('put', `/favorites/${id}`, data)
  },
  deleteFavorite (id) {
    return this.execute('delete', `/favorites/${id}`)
  }
}
