'use strict';

/**
 * @ngdoc function
 * @name miniCommerceApp.controller:OrderCtrl
 * @description
 * Controller para exibição de pedidos do usuário.
 */
angular.module('miniCommerceApp')
  .controller('OrderCtrl', function ($scope, orderService) {
    orderService.getOrders().then(function (orders) {
      $scope.orders = orders;
    });
  });
