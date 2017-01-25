console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {
    var factory = {};

    factory.index = function(id, callback){
        $http.get(`/users/${id}`).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.login = function(user, callback){
        $http.post('/login', user).then(function(returned_data){
            callback(returned_data);
        })
    }

    factory.register = function(user, callback){
        $http.post('/register', user).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    return factory;
}])
