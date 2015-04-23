'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.recipes',
    'myApp.recipeDetail',
    'myApp.addRecipe',
    //'myApp.view2',
    'myApp.version',
    'restangular',
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/recipes'});
        RestangularProvider.setBaseUrl('/api');
        RestangularProvider.setRequestSuffix('/');

    }]);
