var app = require('./server')
var db = app.get('db');

module.exports = {

  create: function(req,res,next) {
    var name = req.query.name;
    var desc = req.query.description;
    var price = req.query.price;
    var img = req.query.imageurl;
    db.create_product([name, desc, price, img], function(err, incidents) {
    res.status(200).send('Product created!');
  });
  },

  getOne: function(req,res,next) {
    var id = req.query.id;
    db.read_product([id], function(err, product) {
      res.status(200).send(product);
    })
  },

  getAll: function(req,res,next) {
    db.read_products(function(err, products) {
      res.status(200).send(products);
    })
  },

  update: function(req,res,next) {
    var desc = req.query.description;
    var id = req.query.id;
    db.update_product([desc, id], function(err, product) {
      res.status(200).send('Product updated!');
    })
  },

  delete: function(req,res,next) {
    var id = req.query.id;
    db.delete_product([id], function(err, product) {
      res.status(200).send('Deleted!');
    })
  }

};
