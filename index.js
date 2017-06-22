var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var massive = require('massive')


var app = module.exports = express()

massive(connectionString).then(function(dbInstance) {
  app.set('db', dbInstance)
})


app.use(bodyParser.json());
app.use(cors());



app.listen('3000', function() {
  console.log('So a man goes to see his Dr., tells her..')
})
