var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client'))); // loads your main index. Basically says look inside this folder and run what's inside
app.use(express.static(path.join(__dirname, './bower_components'))); // loads your bower components
app.use(bodyParser.json()); // need this to send JSON objects to backend

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
})
