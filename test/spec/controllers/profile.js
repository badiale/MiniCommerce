'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('miniCommerceApp'));

  var ProfileCtrl,
    scope,
    saveSpy;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    saveSpy = jasmine.createSpy("saveSpy").and.callFake(function () {
      return $q.when();
    });
    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope,
      userService: {
        getUser: function () {
          return $q.when({name: "fake"});
        },
        saveUser: saveSpy
      }
    });
  }));

  it('should load user', function () {
    scope.$digest();
    expect(scope.user).toEqual({name: "fake"});
  });

  it('should validate passowrds', function () {
    scope.user = {password: "a", confirmPassword: "b"};
    scope.saveUser();
    expect(scope.alerts).toEqual([jasmine.objectContaining({type: 'danger'})]);
    // nao deve ter invocado o serviço
    expect(saveSpy.calls.count()).toBe(0);

    scope.user = {password: "a", confirmPassword: "a"};
    scope.alerts = [];
    scope.saveUser();
    expect(scope.alerts).toEqual([]);
    expect(saveSpy.calls.count()).toBe(1);
    expect(saveSpy.calls.mostRecent().args).toEqual([scope.user]);
  });

  it('should display message when success', function () {
    scope.user = {password: "a", confirmPassword: "a"};
    scope.alerts = [];
    scope.saveUser();
    expect(scope.alerts).toEqual([]);
    expect(saveSpy.calls.count()).toBe(1);
    expect(saveSpy.calls.mostRecent().args).toEqual([scope.user]);
    scope.$digest();
    expect(scope.alerts).toEqual([jasmine.objectContaining({type: 'success'})]);
  });
});
