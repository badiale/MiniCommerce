'use strict';

/**
 * @ngdoc service
 * @name miniCommerceApp.userService
 * @description
 * Serviço para simular uma conexão com um servidor e manipular dados de usuário.
 */
angular.module('miniCommerceApp')
  .service('userService', function ($window, $q) {
    var USER = 'user';

    /**
     * @ngdoc method
     * @name miniCommerceApp.userService#getUser
     * @methodOf miniCommerceApp.userService
     * @description
     * Busca um usuário no servidor.
     * @returns {Promise} promessa que será resolvida com o usuário.
     * */
    this.getUser = function () {
      // simula a busca no servidor, persistindo o usuário no localStorage
      var user = angular.fromJson($window.localStorage.getItem(USER));
      if (user !== null) {
        return $q.when(user);
      }

      return $q.when({
        name: 'João',
        surname: 'Carlos',
        email: 'jao@minicommerce.com',
        receiveOffer: true
      });
    };

    /**
     * @ngdoc method
     * @name miniCommerceApp.userService#saveUser
     * @methodOf miniCommerceApp.userService
     * @description
     * Persiste as alterações do usuário no banco.
     * @param {user} user Usuário à ser salvo.
     * @returns {Promise} promessa que será resolvida quando o usuário for salvo.
     * */
    this.saveUser = function (user) {
      // remove as propriedades de senha "por seguranca"
      delete user.password;
      delete user.confirmPassword;

      // persiste no local storage
      $window.localStorage.setItem(USER, angular.toJson(user));

      // "envia para o servidor alguma requisição".
      return $q.when();
    };
  });
