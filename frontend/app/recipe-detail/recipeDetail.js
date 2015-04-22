'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'recipe-detail/recipe-detail.html',
            controller: 'RecipeDetailCtrl'
        });
    }])

    .controller('RecipeDetailCtrl', ['$scope', '$routeParams', '$location', '$http', '$route', 'Restangular', function ($scope, $routeParams, $location, $http, $route, Restangular) {
        $scope.recipeId = $routeParams.recipeId;

        $scope.editing = false;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (recipe) {
            $scope.recipe = recipe;
        });
        $scope.deleteRecipe = function() {
            var confirmation = confirm("Are you sure that you want to delete this recipe? This cannot be undone.");

            if(confirmation) {
                Restangular.one('recipes', $scope.recipeId).customDELETE().then(function () {
                    alert("Your recipe was successfully deleted!");
                    $location.path('/recipes')
                },
                function() {
                    alert("There was a problem deleting the recipe! :(")
                });
            }
        };
        $scope.backRecipe = function() {
            var confirmation = confirm("Are you sure that you want to go back to the recipe list?");
            if(confirmation) {
                    $location.path('/recipes')
            }
        };
        $scope.addRecipe = function() {
            var confirmation = confirm("Let's add a new recipe!");
            if(confirmation) {
                    $location.path('/add-recipe')
            };
        };

        $scope.addIngredientToRecipe = function (ingredientName) {
            if (ingredientName != null) {
                var ingredient = {name: ingredientName}
                $scope.recipe.ingredients.push(ingredient);
                $scope.ingredientName = null;
            }
        };

        $scope.addPhoto = function () {
            var file = document.getElementById('file').files[0],
                reader = new FileReader();
            reader.onload = function (e) {
                $scope.recipe.photo = 'data:image/png;base64,' + btoa(e.target.result);
                $scope.$apply();
            };
            reader.readAsBinaryString(file);
        };

        $scope.removeIngredientFromRecipe = function (ingredient) {
            var index = $scope.recipe.ingredients.indexOf(ingredient);
            if (index != -1) {
                $scope.recipe.ingredients.splice(index, 1);
            }
        };

        $scope.saveEditedRecipe = function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.recipe.photo = 'data:image/png;base64,' + btoa(e.target.result);
                Restangular.one('recipes/', $scope.recipeId).customPUT($scope.recipe).then(function (recipe) {
                    $route.reload();
                    toastr.success("Your recipe was successfully saved!");
                }, function (error) {
                    toastr.error("Something went wrong saving your recipe...");
                });

            };
            $http.get($scope.recipe.photo + '/', {responseType: 'arraybuffer'}).then(function(e){
                console.log(e);
                var file = new Blob([e.data]);
                reader.readAsBinaryString(file);
            });
        };
    }]);