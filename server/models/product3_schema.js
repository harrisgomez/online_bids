console.log('Successfully loaded Product3 schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product3Schema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    bid: {type: Number, min: [1, "Bid must be greater than 0"], required: [true, "Bid is required."]},
    bidders: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {timestamps: true} );

mongoose.model('Product3', product3Schema);
