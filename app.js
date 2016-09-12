(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

MsgController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.stateOfBeing = " ";
  $scope.list = '';
  $scope.empty = 'no';
  $scope.filledIn = 'no';
  
  

  function calculateString(string) {
  	var regex = /\W+/;
  	var myArray = string.split(regex);

  	var totalStringValue = myArray.length;
  	return totalStringValue
  }

  $scope.checkIfTooMuch = function () {
  	var howManyItems = calculateString($scope.list);

  	
  	if ($scope.list === "") {
  		$scope.stateOfBeing = "Please enter data first"
  		howManyItems = 0;
  		$scope.empty = 'yes';
  		$scope.filledIn = 'no';
  		// turn text red and border red.
  	}
  	else {
  		if (howManyItems <= 3) {
  			$scope.stateOfBeing = "Enjoy!";
  			$scope.filledIn = 'yes';
  			$scope.empty = 'no';
  			// turn text green and border green.
  		}
  		else if (howManyItems > 3) {
  			$scope.stateOfBeing = "Too much!";
  			$scope.filledIn = 'yes';
  			$scope.empty = 'no';
  			// turn text green and border green.
  		}
  	}

  	
    $scope.totalValue = howManyItems;
  };

  
}

})();
