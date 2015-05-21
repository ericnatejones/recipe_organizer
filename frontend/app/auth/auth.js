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

        $scope.registration = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: ''

        };

        $scope.login = function () {
            user.login($scope.credentials).then(function () {
                $scope.credentials = {
                    username: '',
                    password: ''
                };
                $location.path('/recipes')
            }, function () {
                alert("There was a problem. Please try again")
            })
        };

        $scope.signup = function () {
            user.signup($scope.registration).then(function () {
                $scope.registration = {
                    first_name: '',
                    last_name: '',
                    username: '',
                    password: '',
                    email: ''
                };
                $location.path('/kids')
            }, function () {
                alert("There was a problem. Please try again")
            })
        }

    }]);




