(function() {
  'use strict';
  angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {
      var service = {};
      var baseUrl = 'http://www.omdbapi.com/?v=1&';

      function httpPromise(url) {
        var deffred = $q.defer();
        $http.get(url).then(function(response) {
          deffred.resolve(response);
        }, function() {
          deffred.reject();
        });
        return deffred.promise;
      }

      service.search = function(query) {
        return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
      };
      service.find = function(id) {
        return httpPromise(baseUrl + 'i=' + id);
      };
      return service;
    });
})();
