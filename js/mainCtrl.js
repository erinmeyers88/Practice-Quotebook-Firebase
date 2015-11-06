angular.module("quoteBook")
	.controller("mainCtrl", function ($scope, dataService, $firebaseObject, $firebaseArray) {

		$scope.showNewInput = false;

		var fb = "https://quotekeeper.firebaseio.com/";
		
		var quotesRef = new Firebase(fb + "/quotes");
		
		$scope.quotes = $firebaseArray(quotesRef);

		$scope.typeQuote = function () {
			$scope.showNewInput = !$scope.showNewInput;
			$scope.newQuote = {};
		};

		$scope.addQuote = function (newQuote) {
			if (newQuote.text && newQuote.author) {
				$scope.quotes.$add(newQuote);
			}
			$scope.newQuote = {};
			return $scope.quotes;
		};

		$scope.removeQuote = function (quoteToRemove) {
			if (window.confirm("Are you sure you want to delete this quote?")) {
				$scope.quotes.$remove(quoteToRemove);
			};
			return $scope.quotes;
		};


});