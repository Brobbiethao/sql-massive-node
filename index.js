var port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var productCtrl = require('./productsCtrl');
var connectionString = "postgres://dhogeland@localhost:5432/first_db";
var app = express();
var db;

massive(connectionString).then(function(dbInstance) {
  app.set('db', dbInstance);
  db = dbInstance;
})

app.use(bodyParser.json());
app.use(cors());

app.post('/api/add', productCtrl.create);

app.get('/api/getone/:id', productCtrl.getOne);
app.get('/api/getall', productCtrl.getAll);

app.put('/api/update/:name/:description/:price/:imageurl/:id', productCtrl.update);

app.delete('/api/delete/:id', productCtrl.delete);

app.listen(port, function() {
  console.log('Yes master?');
})
