'use strict';

/**
 * @ngdoc service
 * @name miniCommerceApp.orderService
 * @description
 * Serviço para simular uma conexão com um servidor e manipular dados de pedidos.
 */
angular.module('miniCommerceApp')
  .service('orderService', function ($q) {
    /**
     * @ngdoc method
     * @name miniCommerceApp.userService#getOrders
     * @methodOf miniCommerceApp.orderService
     * @description
     * Busca os pedidos do usuário.
     * @returns {Promise} promessa que será resolvida com os pedidos.
     * */
    this.getOrders = function () {
      return $q.when([{
        code: '123987',
        date: new Date(2015, 8, 5, 23, 59),
        items: [{
          name: 'TV 42" Plasma',
          description: 'TV de 42" de plasma, full hd, muito colorida e bem bonita',
          image: 'images/tv.jpg'
        }, {
          name: 'Celular',
          description: 'Celular de última geração, com toques polifônicos e capaz de enviar SMS',
          image: 'images/celular.png'
        }]
      }, {
        code: '237468',
        date: new Date(2015, 7, 23, 10, 9),
        items: [{
          name: 'Furadeira 16 velocidades',
          description: 'Furadeira com incríveis 16 velocidades! (Qual será a utilidade disso?)',
          image: 'images/furadeira.jpg'
        }]
      }]);
    };
  });
