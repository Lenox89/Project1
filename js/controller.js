angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The Grimm Syndicate!";
    })
    .controller('ContactController', function($scope) {
 
        $scope.contactUser = {};
 
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.name = $scope.user.name;
                $scope.contactUser.email = $scope.user.email;
                $scope.contactUser.message = $scope.user.message;
            }
 
            console.log($scope.contactUser.name + " " + $scope.contactUser.email + " " + $scope.contactUser.message);
        }
    });