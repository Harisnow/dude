var app3 = angular.module('app3' , []);

app3.controller('gList',function($scope) {

$scope.groc = [
{item: "tomato", purchased : false},
{item: "matoto", purchased : false},
{item: "matota", purchased : false},
{item: "tamato", purchased : false},
];

$scope.getList = function(){
	return $scope.showList ? "ang4.html" : "ang5.html"
};





});