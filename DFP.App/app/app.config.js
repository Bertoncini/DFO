'use strict';

angular.
  module('dfoApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/:usersId', {
          template: '<user-detail></user-detail>'
        }).
        otherwise('/users');
    }
  ]);
