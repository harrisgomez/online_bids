var mongoose = require('mongoose');
var users = require('./../controllers/users.js'); // routes us to back-end controllers
var product1 = require('./../controllers/product1.js'); // routes us to back-end controllers
var product2 = require('./../controllers/product2.js'); // routes us to back-end controllers
var product3 = require('./../controllers/product3.js'); // routes us to back-end controllers

module.exports = function(app){
    app.post('/login', users.show);
    app.post('/register', users.create);
    app.get('/users/:id', users.index);

    app.post('/product1', product1.create);
    app.get('/product1', product1.index);
    app.post('/product1/delete', product1.delete);
    app.post('/product2', product2.create);
    app.get('/product2', product2.index);
    app.post('/product2/delete', product2.delete);
    app.post('/product3', product3.create);
    app.get('/product3', product3.index);
    app.post('/product3/delete', product3.delete);
};
