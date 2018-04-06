'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    '720kb.datepicker',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })

    .state('searchBike', {
      url: '/searchBike',
      templateUrl: 'views/searchBike.html',
      controller: 'searchBikeCtrl',
      controllerAs: 'searchBike'
    });
  });
