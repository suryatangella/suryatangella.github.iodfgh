(function () {
    var myapp = angular.module("dashboardViewer");
    var cinController = function ($scope,$rootScope,$http) {
         //$scope.username = "1500000021"  ;
        // $rootScope.rootusername = $scope.username;

        $scope.search = function (username) {
           console.log("search!");

           $rootScope.$broadcast('rootusername', $scope.username);

            
        };
        $scope.username = "1500000022";
    };
    myapp.controller("cinController", cinController);

}());



