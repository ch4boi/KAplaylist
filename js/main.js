myApp=angular.module('myApp',[]);
myApp.controller('myController', function($scope,$http){

	$scope.isModalActive = false;
	$scope.selectedCourse = {};

	$scope.onOpenModalClicked = function(index) {
		$scope.isModalActive = true;

		console.log("index: " + index);

		$scope.selectedCourse = $scope.myData[index];
		 
	}

	$scope.onCloseModalClicked = function() {
		$scope.isModalActive = false;

		console.log("onCloseModalClicked");
	}

	$http.get('json/data.json').success(function(response){
		$scope.myData = response;

		console.log(response);
	});

});