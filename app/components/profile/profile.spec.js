describe('components.profile', function() {
  var $controller;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.profile'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('ProfileController', function() {
    var ProfileController, singleUser;

    beforeEach(function() {
      // Define singleUser and add resolvedUser as a dependency to our controller 
      singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: {
          name: 'growlithe'
        }
      };
      ProfileController = $controller('ProfileController', {
        resolvedUser: singleUser
      });
    });

    it('should be defined', function() {
      expect(ProfileController).toBeDefined();
    });
  });

  describe('Profile Controller with a valid resolved user', function() {
    var ProfileController, singleUser;

    beforeEach(function() {
      // Mock a valid user
      singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: {
          name: 'growlithe'
        }
      };

      // Add the valid user as our resolved dependency
      ProfileController = $controller('ProfileController', {
        resolvedUser: singleUser
      });
    });

    it('should set the view model user object to the resolvedUser', function() {
      expect(ProfileController.user).toEqual(singleUser);
    });
  });
});
