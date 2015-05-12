'use strict';

angular.module('myApp.auth', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auth', {
            templateUrl: 'auth/auth.html',
            controller: 'AuthCtrl'
        });
    }])

    .controller('AuthCtrl', ['Restangular', '$scope', function (Restangular, $scope) {
        $scope.credentials = {
            username: "",
            password: ""
        }

    }]);




