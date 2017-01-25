app.controller('bidController', ['$scope', '$location', '$cookies', 'usersFactory', 'product1Factory', 'product2Factory', 'product3Factory', function($scope, $location, $cookies, usersFactory, product1Factory, product2Factory, product3Factory) {
    if($cookies.get('user_id') == undefined){ // prevents direct route navigation
        $location.url('/');
    }

    $scope.current_user = $cookies.get('user_id');

    $scope.getProduct1 = function(){
        product1Factory.index(function(returned_data){
            $scope.product1_bids = returned_data;
        })
    }

    $scope.getProduct2 = function(){
        product2Factory.index(function(returned_data){
            $scope.product2_bids = returned_data;
        })
    }

    $scope.getProduct3 = function(){
        product3Factory.index(function(returned_data){
            $scope.product3_bids = returned_data;
        })
    }

    $scope.getProduct1();
    $scope.getProduct2();
    $scope.getProduct3();

    $scope.product1 = {};
    $scope.product2 = {};
    $scope.product3 = {};

    $scope.bid_product1 = function(){
        $scope.product1._user = $scope.current_user;
        product1Factory.add($scope.product1, function(returned_data){
            if("errors" in returned_data){
                $scope.errors1 = returned_data.errors;
            }else{
                alert("Thanks for placing your bid.");
                $scope.product1 = {};
                $scope.getProduct1();
            }
        })
    }

    $scope.bid_product2 = function(){
        $scope.product2._user = $scope.current_user;
        console.log($scope.product2);
        product2Factory.add($scope.product2, function(returned_data){
            if("errors" in returned_data){
                $scope.errors2 = returned_data.errors;
            }else{
                alert("Thanks for placing your bid.");
                $scope.product2 = {};
                $scope.getProduct2();
            }
        })
    }

    $scope.bid_product3 = function(){
        $scope.product3._user = $scope.current_user;
        console.log($scope.product3);
        product3Factory.add($scope.product3, function(returned_data){
            if("errors" in returned_data){
                $scope.errors3 = returned_data.errors;
            }else{
                alert("Thanks for placing your bid.");
                $scope.product3 = {};
                $scope.getProduct3();
            }
        })
    }

    $scope.endBid = function(){
        if($scope.product1_bids.length < 1 || $scope.product2_bids.length < 1 ||$scope.product3_bids.length < 1){
            alert("Cannot end the bid. One or more products do not have any bids yet.");
        }else{
            $location.url('/results');
        }

    }
}]);
