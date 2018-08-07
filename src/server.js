const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const bcrypt = require('bcrypt')
const path = require('path')
const PORT = process.env.PORT || 8081

let app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.use(bodyParser.json())


let devDatabase = {
  database: 'postgres',
  username: 'claireobrien',
  password: null,
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

let productionDatabase = process.env.DATABASE_URL

let databaseData;

if (process.env.DATABASE_URL === undefined) {
  databaseData = devDatabase
} else {
  databaseData = productionDatabase
}

const database = new Sequelize(databaseData)

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

app.use('/make-one', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    favoriteZelda: req.body.favoriteZelda
  }, {
    include: [ Favorite ]
  }).then(data => res.json(data))
})

app.use('/get-all', (req, res) => {
  User.findAll({include: [ Favorite ] }).then(users => res.json(users))
})

app.use('/get-one/:user_id', (req, res) => {
  User.findById(req.params.user_id)
  .then(user => res.json(user))
})

app.use('/get-email/:user_email', (req, res) => {
  User.findOne({where: {email:req.params.user_email}})
  .then(user => res.json(user))
})

// Resets the database and launches the express app on :8081
database
  .sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening to port ${PORT}`)
    })
})
