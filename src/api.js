// import Vue from 'vue'
import axios from 'axios'
let URL = (process.env.DATABASE_URL) ? 'https://powerful-lake-84714.herokuapp.com/' : 'http://localhost:8081/'

const client = axios.create({
  baseURL: 'https://powerful-lake-84714.herokuapp.com/',
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
  getUsers () {
    return this.execute('get', '/get-all')
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
    return this.execute('post', `/make-one`, data)
  },
  updateUser (id, data) {
    return this.execute('put', `/users/${id}`, data)
  },
  getUserByID (id) {
    return this.execute('get', `/get-one/${id}`)
  },
  getUserByEmail (email) {
    return this.execute('get', `/get-email/${email}`)
  }

}
