const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const sequelize = new Sequelize({
  database: 'hylian',
  username: 'edwardweymouth',
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
})

const Company = sequelize.define('company', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  street: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});

const Product = sequelize.define('product', {
  code: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  details: {
    type: Sequelize.STRING
  }
});

Company.hasMany(Product, {foreignKey: 'fk_companyid', sourceKey: 'uuid'});
Product.belongsTo(Company, {foreignKey: 'fk_companyid', targetKey: 'uuid'});

app.use('/maketwo', (req, res) => {
    // Apple company
    Company.create({
      name: 'Apple',
      street: 'Cupertino, CA 95014',
      phone: '1-408-996-1010',
      products: [
        // IPhone 7
        {
          code: "A-123",
          name: "Iphone7",
          details: "Price: 649.00 USD & FREE shipping"
        },
        // IPadPro
        {
          code: "A-456",
          name: "IPadPro",
          details: "Price: 417.67 USD & FREE shipping"
        }
      ]
    }, {
      include: [ Product ]
    }).then(() => {

      console.log("-----------> Apple is created");

      // Samsung company
      Company.create({
        name: 'Samsung',
        street: 'Seocho District, Seoul, South Korea',
        phone: '+82-2-2053-3000',
        products: [
          // GalaxyJ7
          {
            code: "S-012",
            name: "GalaxyJ7",
            details: "Price: 219.00 USD & FREE shipping"
          },
          // GalaxyTabA
          {
            code: "S-456",
            name: "GalaxyTabA",
            details: "Price: 299.99 USD & FREE shipping"
          }
        ]
      }, {
        include: [ Product ]
      }).then(() => {
        console.log("-----------> Samsung is created");
      })
    }).then(() => {
      res.send("Done!");
    })
})

app.use('/getall', (req, res) => {
  Company.findAll({
		attributes: [['uuid', 'companyId'], 'name', 'street', 'phone'],
		include: [{
			model: Product,
			where: { fk_companyid: Sequelize.col('company.uuid') },
			attributes: ['code', 'name', 'details']
		}]
	}).then(companies => {
	   res.send(companies);
	});
})

// Resets the database and launches the express app on :8081
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
})
