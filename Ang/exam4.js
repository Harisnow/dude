
var app8 = angular.module('app8', ['carFilters']);
 
app8.controller('mainCtrl', function($scope) {

  $scope.cars = [
        {name: 'Honda', make:  'red'},
    {name: 'Mercedes', make:  'red'},
    {name: 'City', make:  'green'},
    {name: 'Range', make:  'orange'},
    {name: 'Lambo', make:  'green'},
    {name: 'Lancer', make:  'red'}
    ];
 
});