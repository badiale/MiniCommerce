'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('miniCommerceApp'));

  var ProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope,
      userService: {
        getUser: function () {
          return $q.when({name: "fake"});
        },
        saveUser: function () {
          return $q.when();
        }
      }
    });
  }));

  it('should load user', function () {
    scope.$digest();
    expect(scope.user).toEqual({name: "fake"});
  });

  it('should validate passowrds', function () {
    scope.user = {password: "a", confirmPassword: "b"};
    expect(scope.saveUser).toThrowError('Wrong passwords: "a" != "b"');

    scope.user = {password: "a", confirmPassword: "a"};
    expect(scope.saveUser).not.toThrow();
  });
});
