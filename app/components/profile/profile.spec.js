describe('components.profile', function() {
  var $controller;

  // Load ui.router and our component.profile module which we will create next
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.profile'));

  // Inject the $controller service
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('ProfileController', function() {
    var ProfileController;

    beforeEach(function() {
      // Create and instance of our controller
      ProfileController = $controller('ProfileController', {});
    });

    it('should be defined', function() {
      expect(ProfileController).toBeDefined();
    });
  });
});
