angular.module("quoteBook")
	.controller("mainCtrl", function ($scope, dataService) {
		
		$scope.showNewInput = false;
		
		$scope.getQuotes = function () {
			$scope.quotes = dataService.getData();
		}();
		
		
		$scope.typeQuote = function () {
			$scope.showNewInput = !$scope.showNewInput;
			$scope.newQuote = {};
		}
		
		$scope.addQuote = function (newQuote) {
			$scope.quotes = dataService.addData($scope.newQuote);
			$scope.newQuote = {};	
		}

		
		$scope.removeQuote = function (quoteToRemove) {
			dataService.removeQuote(quoteToRemove);
		}
		
		
	});