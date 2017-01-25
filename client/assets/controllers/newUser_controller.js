app.controller('newUserController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies, usersFactory) {
    $scope.user = {};

    $scope.create = function(){
        usersFactory.register($scope.user, function(returned_data){
            if("errors" in returned_data){
                $scope.errors = returned_data.errors;
            }else{
                alert('Successfully Registered!');
                $cookies.put('current_user', returned_data.data);
                console.log($cookies.get('current_user'));
                $location.url('/');
            }
        })
    }
}]);
