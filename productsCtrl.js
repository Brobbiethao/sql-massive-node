var app = require('./index');


module.exports = {
  create: function(req, res, next) {
    var db = req.app.get('db');

    db.create_product([req.body.id, req.body.name, req.body.description, req.body.price, req.body.imageurl])
    .then(function(product) {
      return res.send(product);
    }).catch(function(err) {
      console.log("its broken");
      return res.status(400).json(err);
    })
  },
  getOne: function(req, res, next) {
    var db = req.app.get('db');
    db.read_product([req.params.id]).then(function(product) {
      return res.send(product);
    }).catch(function(err) {
      console.log("its broken");
      return res.status(400).json(err);
    })
  },
  getAll: function(req, res, next) {
    var db = req.app.get('db');
    db.read_products().then(function(products) {
      return res.status(200).json(products)
      console.log("still busted");
    }).catch(function(err) {
      console.log("its busted");
      return res.status(400).json(err);
    })
  },
  update: function(req, res, next) {
    var db = req.app.get('db');
    console.log("its worked");
    db.update_product([req.body.name, req.body.description, req.body.price, req.body.imageurl, req.body.id]).then(function(products) {
      return res.status(200).json(products);
    }).catch(function(err) {
      console.log("its busted");
      return res.status(400).json(err);
    })
  },
  delete: function(req, res, next) {
    var db = req.app.get('db');
    db.delete_product(req.params.id).then(function(products) {
      return res.send(products);
    }).catch(function(err) {
      console.log("its busted");
      return res.status(400).json(err);
    })
  }
}
