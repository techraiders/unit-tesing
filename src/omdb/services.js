angular.module('omdb', [])
  .service('omdbApi', function() {
    this.greet = function() {
      return 'hey';
    };
    return this;
  });
