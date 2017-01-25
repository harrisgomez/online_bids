console.log('server Product2 controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Product2 = mongoose.model('Product2');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Product2.find({}).populate("_user bidders").exec(function(err, results){
            return res.json(results);
        })
    },

    create: function(req, res){
        console.log("FIND THIS", req.body);
        Product2.find({}, function(err, results){
            console.log("all bids", results);
            for(var product in results){
                if(req.body.bid <= results[product].bid){
                    return res.json({errors: "Bid must be higher than previous bids."});
                }
            }
            Product2.create(req.body, function(err, product2){
                if(err){
                    console.log(err);
                    return res.json(err);
                }else{
                    User.findOne({_id: req.body._user}, function(err, user){
                        console.log(req.body._user);
                        product2._user = user._id;
                        product2.bidders.push(user);
                        product2.save(function(err){
                            if(err){
                                console.log("Error in saving the product");
                                return res.json(err);
                            }else{
                                user.product2_bids.push(product2);
                                user.save(function(err){
                                    if(err){
                                        console.log("Error in saving the user");
                                        return res.json(err);
                                    }else{
                                        console.log("Successfully pushed product 2 to user and saved both schemas");
                                        Product2.find({}).populate('_user bidders').exec(function(err, product2_result){
                                            console.log(product2_result);
                                            return res.json(product2_result);
                                        })
                                    }
                                })
                            }
                        })
                    })
                }
            })
        })
    },

    delete: function(req, res){
        Product2.remove({}, function(err){
            if(err){
                return res.json(err);
            }else{
                return res.json("Cleared Product 2");
            }
        })
    }
}
