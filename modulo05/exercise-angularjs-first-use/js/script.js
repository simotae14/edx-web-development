/*
creo il modulo angular
*/
var module = angular.module('listApp', []);

/*
creo il controller angular
*/
var controller = module.controller('listController', initController);

/*
definisco la funzione initController che prenda
come parametro $scope
*/
function initController($scope) {
    // inizializzo l'array
    $scope.items = ['First Item'];
    
    // definisco la funzione addItem
    $scope.addItem = function () {
        /*
        metto una condizione per verificare
        se oggetto newItem ha valore diverso da null
        o da undefined
        */
        if ($scope.newItem) {
        // aggiungo questo nuovo elemento
        // all'array items
        $scope.items.push($scope.newItem); 
        // riazzero il valore di newItem
        $scope.newItem = undefined;
        }    
    };
}