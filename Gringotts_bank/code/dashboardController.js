(function () {
    var app = angular.module("dashboardViewer");
    var DashboardController = function ($scope, $http) {
            // $http.get("https://cors.io/?https://99sszhzro1.execute-api.us-east-1.amazonaws.com/customers/info?cin=" + $rootScope.rootusername)
            //     .then(function (response) {
            //         //console.log(response.data);
            //         $scope.user = response.data;
            //         //console.log('SEARCH');
            //     });
                $scope.$on('rootusername', function (event, arg) { 
                    //$scope.receiver = 'got your ' + arg;
                    $http.get("https://cors.io/?https://99sszhzro1.execute-api.us-east-1.amazonaws.com/customers/info?cin=" + arg)
                    .then(function (response) {
                        //console.log(response.data);
                        $scope.user = response.data;
                        //console.log('SEARCH');
                    });
                  });
    };
    app.controller("DashboardController", DashboardController);
}());