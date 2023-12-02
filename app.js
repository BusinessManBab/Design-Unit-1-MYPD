const express = require('express');
const path = require('path');


/*const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://philip:zMGg6lLYzVFD1ZoL@philip0.b09yqmp.mongodb.net/knowKongsberg',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
*/


const app = express();
const router = require('./routes');

// To be able to read request body:
app.use (function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

module.exports = app;