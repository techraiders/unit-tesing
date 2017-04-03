describe('omdb service', function() {

  it('should return movie data', function() {
    var greeting = 'hey';

    /*angular.mock.module({
      'omdbApi': {
        search: function(query) {
          return movieData;
        }
      }
    });*/

    /* angular.mock.module(function($provide) {
      $provide.factory('omdbApi', function() {
        return {
          search: function(query) {
            return movieData;
          }
        }
      });
    });*/
    angular.mock.module('omdb');

    angular.mock.inject(function(_omdbApi_) {
      omdbApi = _omdbApi_;
    });
    expect(omdbApi.greet()).toBe(greeting);
  });
});
