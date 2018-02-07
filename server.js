// Requiring all the modules that will be used in the simple server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
const path = require('path')

var config = require('./config')
var registrationLogin = require('./router/registrationLogin')
var product = require('./router/product')
var jwtVerify = require('./router/jwtVerify')


var port = process.env.PORT || 4200; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Headers: X-Requested-With');
    next();
  });
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  
  app.use(express.static(path.join('dist')))
  
app.use('/',registrationLogin)
app.use('/product',product)

app.listen(port, () => console.log(`Listening on ${ port }`))


