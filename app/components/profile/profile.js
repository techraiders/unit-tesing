(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.profile', [])
    .controller('ProfileController', function() {
      var vm = this;
    })
    .config(function($stateProvider) {
      $stateProvider
        .state('profile', {
          url: 'user/:id',
          templateUrl: 'components/profile/profile.html',
          controller: 'ProfileController as pc'
        });
    });
})();
