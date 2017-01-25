app.controller('logoutController', ['$scope', '$location', '$cookies', function($scope, $location, $cookies) {
    $scope.user_id = $cookies.remove('user_id');
    $location.url('/');
}]);
