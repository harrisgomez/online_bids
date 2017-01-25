console.log('Product3 Factory');

app.factory('product3Factory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback){
        $http.get('/product3').then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.add = function(product3_bid, callback){
        console.log("PASS TO BACK", product3_bid);
        $http.post('/product3', product3_bid).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.delete = function(callback){
        $http.post('/product3/delete').then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data);
        })
    }

    return factory;
}])
