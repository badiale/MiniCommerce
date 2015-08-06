'use strict';

/**
 * @ngdoc function
 * @name miniCommerceApp.controller:AddressCtrl
 * @description
 * Controller para busca exibição de endereços.
 */
angular.module('miniCommerceApp')
  .controller('AddressCtrl', function ($scope, addressService) {
    addressService.getAddress().then(function (addresses) {
      $scope.addresses = addresses;
    });

    $scope.removeAddress = function (address) {
      addressService.removeAddress(address).then(function () {
        return addressService.getAddress();
      }).then(function (addresses) {
        $scope.addresses = addresses;
      });
    };
  });
