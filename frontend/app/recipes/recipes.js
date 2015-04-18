'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', 'Restangular', '$location', function ($scope, Restangular, $location) {
        Restangular.all('recipes').getList().then(function (recipes) {
            $scope.recipes = recipes;
        })

        $scope.addRecipe = function() {
            var confirmation = confirm("Let's add a new recipe!");
            if(confirmation) {
                    $location.path('/add-recipe')
            };
        };
    }]);