'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('web'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should validate the set up', inject(function($controller) {
    $controller('MainCtrl', {
      $scope: scope
    });
    expect(true).toBeTruthy();
  }));
});
