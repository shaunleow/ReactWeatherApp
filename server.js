// node’s keyword, require, to load in the module. argument is string name of the module
// now can access entire express api
var express = require('express');

// call express library as a function. nothing as arguments.
// tell which folder we want to serve.
// app.use lets you add functionality to your express app
// express.static is going to specify a folder name we want exposed to the web server
var app = express();
app.use(express.static('public'));

// start the server
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
