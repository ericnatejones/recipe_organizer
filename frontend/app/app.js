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

    }]);
