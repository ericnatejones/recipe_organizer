'use strict';

describe('myApp.recipes module', function () {

    beforeEach(module('myApp.recipes'));

    describe('recipes controller', function () {

        it('should ....', inject(function ($controller) {
            var RecipesCtrl = $controller('RecipesCtrl');
            expect(RecipesCtrl).toBeDefined();
        }));

        //check for a response
        //it('should ....', inject(function ($scope.addRecipe) {
        //    var $scope.addRecipe = $controller();
        //    expect(addRecipe).toBeDefined();
        //}));

    });
});

