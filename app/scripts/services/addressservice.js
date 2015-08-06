'use strict';

/**
 * @ngdoc service
 * @name miniCommerceApp.addressService
 * @description
 * # addressService
 * Service in the miniCommerceApp.
 */
angular.module('miniCommerceApp')
  .service('addressService', function ($q, $window) {
    var KEY = "address";
    var storage = $window.localStorage;

    /**
     * @ngdoc method
     * @name miniCommerceApp.addressService#addAddress
     * @methodOf miniCommerceApp.addressService
     * @description
     * Adiciona um endereço do usuário no servidor.
     * <p>
     * Este método atribui um id ao endereço fornecido.
     * @param {address} address endereço à ser salvo.
     * @returns {Promise} promessa que será resolvida quando tiver sucesso.
     * */
    this.addAddress = function (address) {
      return this.getAddress().then(function (addresses) {
        if (angular.isUndefined(address.id)) {
          var newId = 0;
          angular.forEach(addresses, function (address) {
            newId = Math.max(newId, address.id);
          });
          address.id = newId + 1;
        }
        addresses.push(address);
        storage.setItem(KEY, angular.toJson(addresses));
      });
    };

    /**
     * @ngdoc method
     * @name miniCommerceApp.addressService#updateAddress
     * @methodOf miniCommerceApp.addressService
     * @description
     * Atualiza um endereço no servidor.
     * <p>
     * Se o endereço não possuir id, ele será inserido na base.
     * @param {address} address endereço à ser salvo.
     * @returns {Promise} promessa que será resolvida quando tiver sucesso.
     * */
    this.updateAddress = function (address) {
      var self = this;
      return self.removeAddress(address).then(function () {
        return self.addAddress(address);
      });
    };

    /**
     * @ngdoc method
     * @name miniCommerceApp.addressService#findAddressById
     * @methodOf miniCommerceApp.addressService
     * @description
     * Busca um endereço no banco, dado seu id.
     * <p>
     * Se o endereço não for encontrado, um Error será lançado.
     * @param {number} id Id do endereço.
     * @returns {Promise} promessa que será resolvida com o endereço.
     * */
    this.findAddressById = function (id) {
      return this.getAddress().then(function (addresses) {
        var found = null;
        angular.forEach(addresses, function (address) {
          if (address.id === id) {
            found = address;
          }
        });
        if (found === null) {
          throw new Error("Id not found: " + id);
        }
        return found;
      });
    };

    /**
     * @ngdoc method
     * @name miniCommerceApp.addressService#removeAddress
     * @methodOf miniCommerceApp.addressService
     * @description
     * Remove um endereço do usuário no servidor.
     * @param {address} address endereço à ser removido.
     * @returns {Promise} promessa que será resolvida quando tiver sucesso.
     * */
    this.removeAddress = function (address) {
      return this.getAddress().then(function (addresses) {
        angular.forEach(addresses, function (value, idx) {
          if (value.id === address.id) {
            addresses.splice(idx, 1);
          }
        });
        storage.setItem(KEY, angular.toJson(addresses));
      });
    };

    /**
     * @ngdoc method
     * @name miniCommerceApp.addressService#getAddress
     * @methodOf miniCommerceApp.addressService
     * @description
     * Busca todos os endereços do usuário no servidor.
     * @returns {Promise} promessa que será resolvida com um array de endereços.
     * */
    this.getAddress = function () {
      var addresses = angular.fromJson(storage.getItem(KEY));
      if (addresses) {
        return $q.when(addresses);
      }
      return $q.when([{
        id: 1,
        street: "rua 1",
        number: 10,
        city: "São Paulo",
        state: "SP"
      }, {
        id: 2,
        street: "rua 2",
        number: 20,
        city: "São Paulo",
        state: "SP"
      }, {
        id: 3,
        street: "rua 3",
        number: 30,
        city: "São Paulo",
        state: "SP"
      }]);
    };
  });
