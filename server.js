// ==REQUIRE=======================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');


// ==INITIALIZE=======================================
var app = module.exports = express();

// ==MIDDLEWARE=======================================
app.use(bodyParser.json());

// ==SYNC TO DATABASE=======================================
var massiveServer = massive.connectSync({
  connectionString: 'postgress://localhost/massive-afternoon-project'
})
app.set('db', massiveServer);
//========controllers must be required after 'db' is set=======
var productsCtrl = require('./productsCtrl');
//====================================================
var db = app.get('db');

// ==ENDPOINTS=======================================
app.get('/product', productsCtrl.getOne);
app.get('/products', productsCtrl.getAll);
app.post('/create', productsCtrl.create);
app.put('/update', productsCtrl.update);
app.delete('/delete', productsCtrl.delete)












// ==PORT/LISTEN=======================================
var port = 4000;
app.listen(port, function() {
  console.log('Listening to port: ' + port)
})
