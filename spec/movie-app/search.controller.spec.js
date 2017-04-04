describe('Search controller', function() {
  var vm;
  var $location;
  var $controller;

  beforeEach(module('movieApp'));

  beforeEach(inject(function(_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
  }));


  it('should redirect to the query result page for non-empty query', function() {
    vm = $controller('seachController', {
      $location: $location
    }, {
      query: 'star wars'
    });
    vm.search();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should not redirect to the query results for empty query', function() {
    vm = $controller('seachController', {
      $location: $location
    }, {
      query: ''
    });
    vm.search();
    expect($location.url()).toBe('');
  });
});
