'use strict';

/**
 * @ngdoc directive
 * @name miniCommerceApp.directive:myLocation
 * @element a
 * @restrict A
 * @description
 * Diretiva que deve ser usada em links.
 * <p>
 * Ela preenche o campo href com a url fornecida e, adicionalmente,
 * coloca a classe "active" no pai quando o usuário está na página especificada
 * pela url.
 * <p>
 * Esta diretiva é ideal para ser usada com a barra de navegação do bootstrap.
 * @param {string} myLocation
 * Url para qual o link aponta.
 */
angular.module('miniCommerceApp')
  .directive('myLocation', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var href = attrs.myLocation;
        element.attr('href', href);

        scope.$watch(function () {
          return $location.url();
        }, function (newUrl) {
          element.parent().toggleClass('active', href === '#' + newUrl);
        });
      }
    };
  });
