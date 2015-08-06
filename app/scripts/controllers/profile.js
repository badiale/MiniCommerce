'use strict';

/**
 * @ngdoc function
 * @name miniCommerceApp.controller:ProfileCtrl
 * @description
 * Controller da página de perfil do usuário
 */
angular.module('miniCommerceApp')
  .controller('ProfileCtrl', function ($scope, userService) {
    $scope.loading = true;
    userService.getUser().then(function (user) {
      $scope.user = user;
    }).finally(stopLoading);

    $scope.alerts = [];

    $scope.saveUser = function () {
      var user = $scope.user;
      if (user.password !== user.confirmPassword) {
        $scope.alerts.push({
          type: 'danger',
          msg: 'As senhas fornecidas são diferentes.'
        });
        return;
      }
      $scope.loading = true;
      userService.saveUser(user).then(function () {
        $scope.alerts.push({
          type: 'success',
          msg: 'Usuário salvo com sucesso.'
        });
      }).finally(stopLoading);
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    function stopLoading() {
      $scope.loading = false;
    }
  });
