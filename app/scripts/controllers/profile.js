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

    $scope.saveUser = function () {
      var user = $scope.user;
      if (user.password !== user.confirmPassword) {
        // FIXME deveria aparecer uma mensagem amigável para o usuário.
        throw new Error('Wrong passwords: "' + user.password + '" != "' + user.confirmPassword + '"');
      }
      $scope.loading = true;
      userService.saveUser(user).finally(stopLoading);
    };

    function stopLoading() {
      $scope.loading = false;
    }
  });
