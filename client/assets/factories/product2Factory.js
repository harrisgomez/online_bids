console.log('Product2 Factory');

app.factory('product2Factory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback){
        $http.get('/product2').then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.add = function(product2_bid, callback){
        console.log("PASS TO BACK", product2_bid);
        $http.post('/product2', product2_bid).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.delete = function(callback){
        $http.post('/product2/delete').then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data);
        })
    }

    return factory;
}])
