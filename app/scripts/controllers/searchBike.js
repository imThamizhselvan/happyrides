'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:searchBikeCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp').controller('searchBikeCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

    $scope.init = function () {
      console.log('hit searchBike');
    };

    $scope.init();
  }])
