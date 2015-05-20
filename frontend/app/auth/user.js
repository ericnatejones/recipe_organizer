'use strict';

angular.module('myApp.user', [])

    .service('user', function (Restangular, $q, $location) {
        var user = {};

        user.info = {
            id: '',
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            recipes: ''
        };

        user.getInfo = function () {
            var deferred = $q.defer();

            Restangular.one(user.urls.get_user_info).customGET().then(function (data) {
                user.info = data;
                deferred.resolve();
            }, function (error) {
                deferred.reject(error)
            });

            return deferred.promise;
        };

        user.login = function (credentials) {
            var deferred = $q.defer();

            Restangular.one(user.urls.get_token).customPOST(credentials).then(function (data) {
                sessionStorage.setItem('DjangoAuthToken', data.token);
                Restangular.setDefaultHeaders({Authorization: 'Token ' + data.token});
                user.getInfo().then(function () {
                    deferred.resolve();
                });
            }, function (error) {

                deferred.reject(error)
            });

            return deferred.promise
        };

        user.logout = function () {
            user.info = {
                id: '',
                name: ''
            };
            sessionStorage.clear();
            Restangular.setDefaultHeaders({Authorization: ''});
            $location.path('/login');
        };

        user.urls = {
            get_token: 'api-token-auth/',
            get_user_info: 'get-user-info/'
        };

        return user
    });


