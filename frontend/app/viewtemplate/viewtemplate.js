'use strict';

angular.module('myApp.auth', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewtemplate', {
            templateUrl: 'viewtemplate/viewtemplate.html',
            controller: 'ViewtemplateCtrl'
        });
    }])

    .controller('ViewtemplateCtrl', [function () {

    }])




