'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-recipe', {
            templateUrl: 'add-recipe/add-recipe.html',
            controller: 'AddRecipeCtrl'
        });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular','$location', function ($scope, Restangular, $location) {

        $scope.recipe = {
            ingredients: []
        };

        $scope.addIngredientToRecipe = function (ingredientName) {
            if (ingredientName != null) {
                var ingredient = {name: ingredientName}
                $scope.recipe.ingredients.push(ingredient);
                $scope.ingredientName = null;
            }
        };

        $scope.removeIngredientFromRecipe = function (ingredient) {
            var index = $scope.recipe.ingredients.indexOf(ingredient);
            if (index != -1) {
                $scope.recipe.ingredients.splice(index, 1);
            }
        };

        $scope.addRecipe = function () {
            Restangular.all('add-recipe').customPOST($scope.recipe).then(function () {
                toastr.success("Recipe was successfully created!");
                $scope.recipe = {};
            }, function (error) {
                toastr.error("There was a problem adding your recipe. This was the error: " + error.status + " " + error.statusText);
            });
        };

        $scope.backRecipe = function() {
            var confirmation = confirm("Are you sure that you want to go back to the recipe list?");
            if(confirmation) {
                    $location.path('/recipes')
            }
        };
    }]);

