console.log('server Product1 controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Product1 = mongoose.model('Product1');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Product1.find({}).populate("_user bidders").exec(function(err, results){
            return res.json(results);
        })
    },

    create: function(req, res){
        console.log("FIND THIS", req.body);
        Product1.find({}, function(err, results){
            console.log("all bids", results);
            for(var product in results){
                if(req.body.bid <= results[product].bid){
                    return res.json({errors: "Bid must be higher than previous bids."});
                }
            }
            Product1.create(req.body, function(err, product1){
                if(err){
                    console.log(err);
                    return res.json(err);
                }else{
                    User.findOne({_id: req.body._user}, function(err, user){
                        console.log(req.body._user);
                        product1._user = user._id;
                        product1.bidders.push(user);
                        product1.save(function(err){
                            if(err){
                                console.log("Error in saving the product");
                                return res.json(err);
                            }else{
                                user.product1_bids.push(product1);
                                user.save(function(err){
                                    if(err){
                                        console.log("Error in saving the user");
                                        return res.json(err);
                                    }else{
                                        console.log("Successfully pushed product 1 to user and saved both schemas");
                                        Product1.find({}).populate('_user bidders').exec(function(err, product1_result){
                                            return res.json(product1_result);
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
        Product1.remove({}, function(err){
            if(err){
                return res.json(err);
            }else{
                return res.json("Cleared Product 1");
            }
        })
    }
}
