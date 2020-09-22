'use strict';

angular.
module('userDetail').
component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: ['$scope', '$location', '$routeParams', 'User',
        function UserDetailController($scope, $location, $routeParams, User) {
            var self = this;

            if ($routeParams.usersId > 0)
                User.GetId(
                    $routeParams.usersId
                ).then((success) => {
                    $scope.user = success.data;
                }, (error) => {
                    $scope.user = {};
                    $scope.message = error.data;
                });
            else
                $scope.user = {};
            let completeSave = (success) => $location.url('/users');
            let errorSave = (error) => {
                $scope.message = error.data;
            };

            $scope.saveUser = function (user) {
                $scope.message = '';
                if (user.id > 0)
                    User.update(user.id, user).then(completeSave, errorSave);
                else
                    User.insert(user).then(completeSave, errorSave);
            }

            $scope.cancelUser = function () {
                $location.url('/users')
            }

        }
    ]
});