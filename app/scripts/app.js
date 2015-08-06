'use strict';

/**
 * @ngdoc overview
 * @name miniCommerceApp
 * @description
 * # miniCommerceApp
 *
 * Módulo principal da aplicação.
 */
angular
  .module('miniCommerceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl'
      })
      .when('/address/:id', {
        templateUrl: 'views/addressedition.html',
        controller: 'AddressEditionCtrl'
      })
      .when('/address/new', {
        templateUrl: 'views/addressedition.html',
        controller: 'AddressEditionCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/order'
      });
  });
