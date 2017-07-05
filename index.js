const port = 3000;
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const connectionString = "postgres://brobbiethao@localhost:5432/sandbox"
const products_controller = require('./products_controller')

const app = module.exports = express()
app.use( bodyParser.json() )
app.use( cors() )
app.use(express.static(__dirname + '/public'))
massive( connectionString ).then(dbInstance => {
  app.set('db', dbInstance);
  db = dbInstance;
})

/*
controller functions:
create
getAll
getOne:$1
update:$2
delete
*/

//example endpoint app.verb( '/api/table' or /api/table/:param, controller.function E.G. products.controller.getAll)
app.get('/api/products', products_controller.getAll)
app.get('/api/product/:id', products_controller.getOne)

app.post('/api/product', products_controller.create)

app.put('/api/product/:id', products_controller.update)

app.delete('/api/product', products_controller.delete)

app.listen(port, () => {
  console.log(`I am listening on port ${port}.`)
})
