myApp=angular.module('myApp',["ngclipboard"]);
// ngClipBoard instruction here - https://sachinchoolur.github.io/ngclipboard/

myApp.controller('myController', function($scope, $http){ // All $* variables are angular's modules

	// Everything assigned in $scope is accessible in the DOM (HTML)
	$scope.isModalActive = false;

	$scope.selectedCourse;


	// opens modal by setting as active and keep track of the index of the entry
	$scope.onOpenModalClicked = function(index) {
		$scope.isModalActive = true;

		console.log("index: " + index);

		// Get the entry corresponding to the index clicked
		// Defining what is "selectedCourse" as being within a specific index
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

// new stuff


});