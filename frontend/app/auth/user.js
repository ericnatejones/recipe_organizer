'use strict';

angular.module('myApp.user', [])

    .service('user', function (Restangular, $q, $location, $rootScope) {
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

            Restangular.one(user.urls.get_user_info).customGET().then(function (response) {
                user.info = response;
                $rootScope.$broadcast("user-updated");
                deferred.resolve();
            }, function (error) {
                deferred.reject(error)
            });

            return deferred.promise;
        };

        user.login = function (credentials) {
            var deferred = $q.defer();

            Restangular.one(user.urls.get_token).customPOST(credentials).then(function (response) {
                sessionStorage.setItem('DjangoAuthToken', response.token);
                Restangular.setDefaultHeaders({Authorization: 'Token ' + response.token});
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

        user.signup = function (registration) {
            var deferred = $q.defer();

            Restangular.one(user.urls.register_user).customPOST(registration).then(function () {
                var cred = {
                    username: registration.username,
                    password: registration.password
                };
                user.login(cred).then(function () {
                    deferred.resolve();
                });
            }, function (error) {
                deferred.reject(error)
            });
            return deferred.promise
        };

        user.urls = {
            get_token: 'obtain-auth-token/',
            get_user_info: 'get-user-info/',
            register_user: 'register-user/'
        };

        return user
    });


