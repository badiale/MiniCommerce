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
      .otherwise({
        redirectTo: '/profile'
      });
  });
