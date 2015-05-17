'use strict';

describe('controllers', function(){
  var scope, controller;

  beforeEach(module('web'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should validate the set up', inject(function() {
    expect(true).toBeTruthy();
  }));

  it('should validate the set up', inject(function() {
    expect(scope.authenticated).toBeFalsy();
    scope.user = {
      username: 'abc',
      password: 'password'
    };
    scope.login();
    expect(scope.authenticated).toBeTruthy();
  }));
});
