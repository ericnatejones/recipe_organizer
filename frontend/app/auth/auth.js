'use strict';

angular.module('myApp.auth', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auth', {
            templateUrl: 'auth/auth.html',
            controller: 'AuthCtrl'
        });
    }])

    .controller('AuthCtrl', ['user', 'Restangular', '$scope', '$location', function (user, Restangular, $scope, $location) {
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function () {
            user.login($scope.credentials).then(function () {
                $location.path('/recipes')
            }, function () {
                alert("There was a problem. Please try again")
            })
        };
    }]);




