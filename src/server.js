const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const bcrypt = require('bcrypt')

let app = express()
app.use(cors())
app.use(bodyParser.json())



// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database = new Sequelize('postgres', 'tylerhofer', 'Naticu04179488', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

})
// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let Favorite = database.define('favorites', {
  body: Sequelize.TEXT
})

let User = database.define('users', {
  name: Sequelize.STRING,
  password: Sequelize.STRING
})
// User.beforeCreate(() => {
//   return bcrypt.hash(user.password, 10).then( hash => {
//     user.password = hash
//   }).catch(err => {
//     throw new Error()
//   })
// })

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: database
})

// Create the dynamic REST resource for our Post model
let favoriteResource = epilogue.resource({
  model: Favorite,
  endpoints: ['/favorites', '/favorites/:id']
})
let userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
})

// userResource.create.before((req, res, context) => {
//   console.log("hello");
// })


// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })
