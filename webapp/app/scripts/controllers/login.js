'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('LoginCtrl', function () {
    var self = this;

    self.init = function(){
    	$scope.user={
    		username:'',
    		password:''
    	};
    	// 显示出错信息
    	$scope.showErrorBox = false;
    };
    self.submit = function(){
    	teacher.login($scope.user)
    	.then(function success(){
    		$scope.showErrorBox = false;
    		teacher.getCurrentLoginTeacher(function(){
    			$location.url('/main');
    		});
    	},function error(){
    		$scope.showErrorBox = true;
    		console.log('error',response);
    	});
    };
    self.init();
    $scope.submit = self.submit;
  });
