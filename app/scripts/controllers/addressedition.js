'use strict';

/**
 * @ngdoc function
 * @name miniCommerceApp.controller:AddresseditionCtrl
 * @description
 * # AddresseditionCtrl
 * Controller of the miniCommerceApp
 */
angular.module('miniCommerceApp')
  .controller('AddresseditionCtrl', function ($scope, addressService, $routeParams, $q) {
    $scope.alerts = [];

    if ($routeParams.id !== "new") {
      addressService.findAddressById(parseInt($routeParams.id, 10)).then(setAddress);
    } else {
      $q.when({}).then(setAddress);
    }

    $scope.saveAddress = function () {
      addressService.updateAddress($scope.address)
        .then(function () {
          $scope.alerts.push({type: 'success', msg: 'Endereço salvo com sucesso.'});
        });
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    function setAddress(address) {
      $scope.address = address;
    }
  });
