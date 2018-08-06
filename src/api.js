// import Vue from 'vue'
import axios from 'axios'
const URL = (process.env.DATABASE_URL) ? 'https://powerful-lake-84714.herokuapp.com/' : 'http://localhost:8081/'

const client = axios.create({
  baseURL: URL,
  json: true
})


export default {
 async execute (method, resource, data) {
   return client({
      method,
      url: resource,
      data
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
  },
  createUser (data) {
    return this.execute('post', `/users`, data)
  },
  updateUser (id, data) {
    return this.execute('put', `/users/${id}`, data)
  },

}
