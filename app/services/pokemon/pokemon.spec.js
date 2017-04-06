describe('Pokemon factory', function() {
  var Pokemon;

  // Load the api.pokemon module which we'll create next 
  beforeEach(angular.mock.module('api.pokemon'));

  //Inject the Pokemon service
  beforeEach(inject(function(_Pokemon_) {
    Pokemon = _Pokemon_;
  }));

  //Verify our factory exists
  it('should exist', function() {
    expect(Pokemon).toBeDefined();
  });
});
