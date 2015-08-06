'use strict';

describe('Controller: AddresseditionCtrl', function () {

  // load the controller's module
  beforeEach(module('miniCommerceApp'));

  it('should notify user when address is successfully created', inject(function ($controller, $rootScope, $q) {
    var scope = $rootScope.$new();
    $controller('AddresseditionCtrl', {
      $scope: scope,
      addressService: {
        updateAddress: function (address) {
          expect(address).toEqual({});
          return $q.resolve();
        }
      },
      $routeParams: {
        "id": "new"
      }
    });
    scope.$digest();
    scope.saveAddress();
    scope.$digest();
    expect(scope.alerts).toEqual([jasmine.objectContaining({type: 'success'})]);
  }));

  it('should be able to edit address', inject(function ($controller, $rootScope, $q) {
    var scope = $rootScope.$new();
    $controller('AddresseditionCtrl', {
      $scope: scope,
      addressService: {
        findAddressById: function (id) {
          expect(id).toBe(1);
          return $q.resolve({id: 1});
        },
        updateAddress: function (address) {
          expect(address).toEqual({id: 1});
          return $q.resolve();
        }
      },
      $routeParams: {
        "id": "1"
      }
    });
    scope.$digest();
    scope.saveAddress();
    scope.$digest();
    expect(scope.alerts).toEqual([jasmine.objectContaining({type: 'success'})]);
  }));
});
