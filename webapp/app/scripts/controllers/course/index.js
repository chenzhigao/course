'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseIndexCtrl
 * @description
 * # CourseIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseIndexCtrl', function($scope, $http, $state) {
    var self = this;
    self.init = function() {
      var url = 'http://127.0.0.1:8080/Course/';
      $http.get(url)
        .then(function success(response) {
          $scope.lists = response.data;
          console.log("success");
        }, function error(response) {
          console.log('error', response);
        });
    };
    self.delete = function(course) {
      var url = 'http://127.0.0.1:8080/Course/' + course.id;
      $http.delete(url)
        .then(function success() {
          console.log("删除失败");
          $state.reload();
        }, function error(response) {
          console.log('error', response);
        });
    };
    self.init();
    $scope.delete = self.delete;
  });
