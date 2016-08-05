var app2 = angular.module('app2' , []);

app2.controller('ctrl1',function($scope) {


	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

app2.controller('badC',function($scope) {

var badFeel = ["shame","shame2","shame3"];
	$scope.bad = badFeel[Math.floor((Math.random() * 4))];


});

app2.controller('goodC',function($scope) {

var goodFeel = ["fame","fame2","fame3"];
	$scope.good = goodFeel[Math.floor((Math.random() * 4))];


});