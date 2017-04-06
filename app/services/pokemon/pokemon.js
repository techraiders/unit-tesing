(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('api.pokemon', [])
    .factory('Pokemon', function() {
      var Pokemon = {};

      return Pokemon;
    });
})();
