/*
 * Main App file app.js
 * @author Ghazi Fadil Ramadhan
 *
 */

 // Depedencies requirements, Express

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var routes = require('./routes/car')(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(__dirname+'/public'));

mongoose.connect('mongodb://localhost/car', function(err, res){
	if(err){
		console.log('error connecting to MongoDB.' + err);
	} else {
		console.log('Connected to MongoDB');
	}
});


app.listen(8080);
console.log('Im Listening on port 8080');

// First example router
app.get('/', function(req, res){
	res.send("Hello World!");
});