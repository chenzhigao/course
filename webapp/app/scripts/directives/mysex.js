'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:mySex
 * @description
 * # mySex
 */
angular.module('webappApp')
  .directive('mySex', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mySex directive');
      }
    };
  });
