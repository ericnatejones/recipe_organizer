'use strict';

angular.module('myApp.user', [])

    .service('user', function (Restangular, $q) {
        var user = {};

        user.info = {
            id: '',
            name: ''
        };

        user.login = function(credentials) {
            var deferred = $q.defer();

            Restangular.one(user.URLS.login).customPOST(credentials).then(function(data) {
                user.info = data.user;

                deferred.resolve();

            }, function(error){

                deferred.reject(error)
            });

            return deferred.promise
        };

        user.urls = {
            login: "/login",
            logout: "/logout",
            user: "/user"
        }
        
        return user
    })


