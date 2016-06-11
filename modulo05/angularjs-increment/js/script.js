angular.module('sampleApp', [])
    .controller('sampleController', function($scope) {
        $scope.value = 1;
        $scope.increment = function () {
          $scope.value++;
        }
    });