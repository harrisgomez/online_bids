console.log('Product1 Factory');

app.factory('product1Factory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback){
        $http.get('/product1').then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.add = function(product1_bid, callback){
        console.log("PASS TO BACK", product1_bid);
        $http.post('/product1', product1_bid).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.delete = function(callback){
        $http.post('/product1/delete').then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data);
        })
    }

    return factory;
}])
