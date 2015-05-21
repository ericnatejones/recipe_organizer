'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.recipes',
    'myApp.recipeDetail',
    'myApp.addRecipe',
    'myApp.auth',
    'myApp.user',
    //'myApp.viewtemplate',
    'myApp.version',
    'restangular',
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/auth'});
        RestangularProvider.setBaseUrl('http://localhost:8001');
        RestangularProvider.setRequestSuffix('/');

    }])

    .controller('AppCtrl', function ($scope, user, $location, Restangular) {
        if (sessionStorage.getItem('DjangoAuthToken')) {
            var token = sessionStorage.getItem('DjangoAuthToken');
            Restangular.setDefaultHeaders({Authorization: 'Token ' + token});
            user.getInfo().then(function () {
                $scope.user = user.info;
                $location.path('/recipes');
            });
        }

        if (user.info.id == '') {
            $location.path('/auth');
        }

        $scope.logout = function () {
            user.logout();
            $scope.user = null;
            $location.path('/auth');
        };

        $scope.$on("user-updated", function () {
            $scope.user = user.info;
        });
        //Locks down all routes. This would require you to log in.
        $scope.$on('$routeChangeStart', function () {
            if ((user.info != null && user.info.id == '') || user.info == null) {
                $location.path('/auth');
            }
        });

    });
