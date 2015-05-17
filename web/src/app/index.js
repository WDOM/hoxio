'use strict';

angular.module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('channels', {
        url: '/channels',
        templateUrl: 'app/channels/channels.html',
        controller: 'ChannelsCtrl'
      });

    $urlRouterProvider.otherwise('/');

  })
;
