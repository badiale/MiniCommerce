'use strict';

describe('Controller: AddressCtrl', function () {

  // load the controller's module
  beforeEach(module('miniCommerceApp'));

  var AddressCtrl,
    scope,
    addresses;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();

    addresses = [{id: 1}, {id: 2}];

    AddressCtrl = $controller('AddressCtrl', {
      $scope: scope,
      addressService: {
        getAddress: function () {
          return $q.when(addresses);
        },
        removeAddress: function () {
          return $q.when();
        }
      }
    });
  }));

  it('should load addresses from the server', function () {
    scope.$digest();
    expect(scope.addresses).toEqual([{id: 1}, {id: 2}]);
  });

  it('should update addresses when one is deleted', function () {
    scope.$digest();
    scope.removeAddress({id: 2});
    addresses = [{id: 1}];
    scope.$digest();
    expect(scope.addresses).toEqual([{id: 1}]);
  });
});
