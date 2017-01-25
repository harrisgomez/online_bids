app.controller('resultsController', ['$scope', '$location', '$cookies', 'usersFactory', 'product1Factory', 'product2Factory', 'product3Factory', function($scope, $location, $cookies, usersFactory, product1Factory, product2Factory, product3Factory) {
    if($cookies.get('user_id') == undefined){ // prevents direct route navigation
        $location.url('/');
    }

    $scope.current_user = $cookies.get('user_id');

    usersFactory.index($scope.current_user, function(returned_data){
        $scope.user = returned_data.f_name;
    });

    $scope.getProduct1 = function(){
        product1Factory.index(function(returned_data){
            $scope.highest_bid1 = 0;
            $scope.highest_bidder1 = {};
            for(var bid in returned_data){
                if(returned_data[bid].bid > $scope.highest_bid1){
                    $scope.highest_bid1 = returned_data[bid].bid;
                    $scope.highest_bidder1.f_name = returned_data[bid]._user.f_name;
                }
            }
        })
    }

    $scope.getProduct2 = function(){
        product2Factory.index(function(returned_data){
            $scope.highest_bid2 = 0;
            $scope.highest_bidder2 = {};
            for(var bid in returned_data){
                if(returned_data[bid].bid > $scope.highest_bid2){
                    $scope.highest_bid2 = returned_data[bid].bid;
                    $scope.highest_bidder2.f_name = returned_data[bid]._user.f_name;
                }
            }
        })
    }

    $scope.getProduct3 = function(){
        product3Factory.index(function(returned_data){
            $scope.highest_bid3 = 0;
            $scope.highest_bidder3 = {};
            for(var bid in returned_data){
                if(returned_data[bid].bid > $scope.highest_bid3){
                    $scope.highest_bid3 = returned_data[bid].bid;
                    $scope.highest_bidder3.f_name = returned_data[bid]._user.f_name;
                }
            }
        })
    }

    $scope.getProduct1();
    $scope.getProduct2();
    $scope.getProduct3();

    $scope.startBid = function(){
        product1Factory.delete(function(returned_data){
            console.log(returned_data);
        })
        product2Factory.delete(function(returned_data){
            console.log(returned_data);
        })
        product3Factory.delete(function(returned_data){
            console.log(returned_data);
        })
        $location.url('/bids');
    }
}]);
