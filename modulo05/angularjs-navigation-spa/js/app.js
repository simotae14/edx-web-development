/*
definisco il modulo che si occuperà del routing all'interno di una
Single Page App
*/
var app = angular.module('navigationApp', ['ngRoute']);

// definisco i controller
app.controller('listController', function ($scope, model) {
    $scope.items = model.getAll();
});
app.controller('detailController', function ($scope, $routeParams, model) {
    $scope.itemId = $routeParams.itemId
    $scope.item = model.get($scope.itemId);
});

/*
implementiamo la prima bozza di routing
*/
app.config(function($routeProvider) {
    $routeProvider
        // quando sei alla root mostri del contenuto preso da home.html
        .when('/', {
            // i template posson essere dei file esterni oppure degli script
            // all'interno di index.html
            templateUrl : 'home.html'
        })
        .when('/list', {
            templateUrl : 'list.html',
            // mettiamo anche i controller che guidano la pagina
            controller : 'listController'
        })
        // si aspetta lo specificio itemId
        .when('/detail/:itemId', {
            templateUrl : 'detail.html',
            controller : 'detailController'
        })
        .otherwise({redirectTo : "/"});
});