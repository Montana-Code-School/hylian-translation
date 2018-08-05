const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const bcrypt = require('bcrypt')
const path = require('path')

let app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))

// let database = new Sequelize({
//   database: 'postgres',
//   username: 'claireobrien',
//   password: null,
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,
//
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

let database = new Sequelize(process.env.DATABASE_URL)
//
// const database = (process.env.NODE_ENV === 'production') ? productionDatabase : devDatabase
// // Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let Favorite = database.define('favorites', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  body:{
    type: Sequelize.TEXT
  }
})

let User = database.define('users', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  favoriteZelda: {
    type: Sequelize.STRING
  }
})

User.hasMany(Favorite, {foreignKey: 'fk_userid', sourceKey: 'uuid'});
Favorite.belongsTo(User, {foreignKey: 'fk_userid', targetKey: 'uuid'});

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

app.use('/makeOne', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    favoriteZelda: req.body.favoriteZelda
  }, {
    include: [ Favorite ]
  }).then(data => res.json(data))
})

app.use('/getall', (req, res) => {
  User.findAll({include: [ Favorite ] }).then(users => res.json(users))
})

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
})
