console.log('server Product3 controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Product3 = mongoose.model('Product3');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Product3.find({}).populate("_user bidders").exec(function(err, results){
            return res.json(results);
        })
    },

    create: function(req, res){
        console.log("FIND THIS", req.body);
        Product3.find({}, function(err, results){
            console.log("all bids", results);
            for(var product in results){
                if(req.body.bid <= results[product].bid){
                    return res.json({errors: "Bid must be higher than previous bids."});
                }
            }
            Product3.create(req.body, function(err, product3){
                if(err){
                    console.log(err);
                    return res.json(err);
                }else{
                    User.findOne({_id: req.body._user}, function(err, user){
                        console.log(req.body._user);
                        product3._user = user._id;
                        product3.bidders.push(user);
                        product3.save(function(err){
                            if(err){
                                console.log("Error in saving the product");
                                return res.json(err);
                            }else{
                                user.product3_bids.push(product3);
                                user.save(function(err){
                                    if(err){
                                        console.log("Error in saving the user");
                                        return res.json(err);
                                    }else{
                                        console.log("Successfully pushed product 3 to user and saved both schemas");
                                        Product3.find({}).populate('_user bidders').exec(function(err, product3_result){
                                            console.log(product3_result);
                                            return res.json(product3_result);
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
        Product3.remove({}, function(err){
            if(err){
                return res.json(err);
            }else{
                return res.json("Cleared Product 3");
            }
        })
    }
}
