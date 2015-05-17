'use strict';

angular.module('web')
  .controller('LoginCtrl', function ($scope, $http) {
    
    $scope.user = {};

    $scope.authenticated = false;

    $http.get('http://localhost:8000/users').success(function(data) {
      console.log(data);
    });

    $scope.login = function() {
      $scope.authenticated = false;
      if ($scope.user.username && $scope.user.password) {
        $scope.authenticated = true;
      }
    };
  });
