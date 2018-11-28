'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseEditCtrl
 * @description
 * # CourseEditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseEditCtrl', function ($stateParams, $http, $scope, $state) {
    var self = this;
    self.init = function(){
    	var id = $stateParams.id;
    	var url = 'http://127.0.0.1:8080/Course/' + id;
    	$http.get(url)
    	.then(function success(response){
    		$scope.data = response.data;
    	},function error(response){

    	})

    };
  });
