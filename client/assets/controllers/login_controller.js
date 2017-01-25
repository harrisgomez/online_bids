app.controller('mainController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies, usersFactory){
    $scope.user = {}; // this obj is populated from the main

    $scope.login = function(){
        usersFactory.login($scope.user, function(returned_data){
            var id = returned_data.data._id;
            if("error" in returned_data.data){
                $scope.message = {error: "No users found with that email/password combination."};
            }else{
                $cookies.put("user_id", returned_data.data._id); // stores the logged in user's id into a cookie
                $location.url(`/bids`);
            }
        })
    }
}])
