console.log('Successfully loaded user schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    f_name: {type: String, required: [true, "First name is required."]},
    l_name: {type: String, required: [true, "Last name is required."]},
    dob: {type: Date, required: [true, "Date of Birth is required."]},
    email:  {type: String, unique: true, required: [true, "Invalid email."], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    password:   {type: String, required: [true, "Password is required."]},
    product1_bids: [{type: Schema.Types.ObjectId, ref: 'Product1'}],
    product2_bids: [{type: Schema.Types.ObjectId, ref: 'Product2'}],
    product3_bids: [{type: Schema.Types.ObjectId, ref: 'Product3'}]

}, {timestamps: true} );

mongoose.model('User', userSchema);
