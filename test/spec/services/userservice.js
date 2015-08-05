'use strict';

describe('Service: userService', function () {
  var userService, storageItem, digest;

  // load the service's module
  beforeEach(module('miniCommerceApp', function ($provide) {
    // mocka o localStorage
    $provide.value('$window', {
      localStorage: {
        getItem: function (key) {
          expect(key).toBe("user");
          return storageItem;
        },
        setItem: function (key, value) {
          expect(key).toBe("user");
          expect(typeof value).toBe("string");
          storageItem = value;
        }
      }
    });
  }));

  // instantiate service
  beforeEach(inject(function (_userService_, $rootScope) {
    userService = _userService_;
    digest = $rootScope.$digest;
    storageItem = null;
  }));

  it('should get default user when not defined', function (done) {
    userService.getUser().then(function (user) {
      expect(user).toEqual(jasmine.objectContaining({
        name: "João"
      }));
      done();
    });
    digest();
  });

  it('should get the saved user', function (done) {
    storageItem = angular.toJson({name: "Manuel"});
    userService.getUser().then(function (user) {
      expect(user).toEqual({name: "Manuel"});
      done();
    });
    digest();
  });

  it('should save the user', function (done) {
    userService.saveUser({name: "Manuel"}).then(function () {
      expect(angular.fromJson(storageItem)).toEqual({name: "Manuel"});
      done();
    });
    digest();
  });
});
