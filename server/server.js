var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./config/middleware.express')(app);

require('./config/routes.express')(app);

mongoose.connect('mongodb://localhost/auth', function(){
    app.listen(8080, function(){
    	console.log('Listening to Express on port 8080');
    });
});
