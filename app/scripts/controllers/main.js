'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp').controller('MainCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

    $scope.init = function () {
      console.log('$scope.pickUpDate', $scope.pickUpDate);

      console.log('$scope.todayDate', $scope.todayDate);
    }

    $scope.searchBike = function () {
      console.log('hit');

      $state.go('searchBike');
    }

    $scope.init();
  }])
