var module = angular.module('demoApp', []);

// creo il controller
var controller = module.controller('demoController', initController);

// aggiungo anche il parametro $http
function initController($scope, $http) {
    /*
    uso il metodo get di angular
    per fare la chiamata http al webservice
    */
    $http.get('http://httpbin.org/ip')
        .then(function (response) {
            // assegno a resultJSON la response
            // Parserizzata con JSONSTringify
            $scope.resultJSON = JSON.stringify(response);
            
            // assegno a var resultPty il value di origin
            $scope.resultProperty = response.data.origin; 
        });    
}