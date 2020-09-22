'use strict';

angular
  .module('core.user')
  .factory('User', ['$http',
    function ($http) {
      var services = {};

      services.GetAll = function () {
        return $http.get('http://localhost:55009/api/Users');
      };

      services.GetId = function (id) {
        return $http.get(`http://localhost:55009/api/Users/${id}`);
      };

      services.insert = function (object) {
        return $http.post(`http://localhost:55009/api/Users/`, object);
      };

      services.update = function (id, object) {
        return $http.put(`http://localhost:55009/api/Users/${id}`, object);
      };



      return services;

    }
  ]);