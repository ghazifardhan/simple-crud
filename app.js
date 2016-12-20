/*
 * Main App file app.js
 * @author Ghazi Fadil Ramadhan
 *
 */

 // Depedencies requirements, Express
 var express = require('express');
 var app = express();

 app.use(express.static(__dirname+'/public'));

 app.listen(8080);
 console.log('Im Listening on port 8080');

 // First example router
 app.get('/', function(req, res){
 	res.send("Hello World!");
 });