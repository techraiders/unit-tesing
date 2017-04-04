(function() {
  'use strict';
  angular.module('movieApp', [])
    .controller('seachController', function($location) {
      this.search = function() {
        if (this.query) {
          $location.path('/results').search('q', this.query);
        }
      };
    });
})();
