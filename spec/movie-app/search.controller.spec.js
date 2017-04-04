describe('Search controller', function() {
  var $this;
  var $location;
  var $controller;

  beforeEach(module('movieApp'));

  beforeEach(inject(function(_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;

    /*    _$controller_('seachController', {
          $location: $location // passing location here is optional, _$controller_ service automatically resolves the dependencies injected into angular real controller
        });*/
  }));


  it('should redirect to the query result page for non-empty query', function() {
    $this = $controller('seachController', {
      $location: $location
    }, {
      query: 'star wars'
    });
    // $this.query = 'star wars';
    $this.search();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should not redirect to the query results for empty query', function() {
    $this = $controller('seachController', {
      $location: $location
    }, {
      query: ''
    });
    $this.search();
    expect($location.url()).toBe('');
  });
});
