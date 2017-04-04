(function() {
  'use strict';
  angular.module('movieApp', [])
    .controller('seachController', function($scope, $location) {
      $scope.search = function() {
        if ($scope.query) {
          $location.path('/results').search('q', $scope.query);
        }
      };
    });
})();
