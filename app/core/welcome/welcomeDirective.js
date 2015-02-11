splashPageApp.directive('welcome', ['welcomeService', function (welcomeService) {

	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: 'core/welcome/welcome.html',
		link: function (scope, element, attrs) {
			scope.points = welcomeService.points
		}
	}
}])

splashPageApp.factory('welcomeService', [function () {
	var factory = {}

	factory.points = [
		{
			"title": "Transact with confidence",
			"text": "Buyers and Sellers transact with confidence and simplicity because Antengo formed an exclusive partnership with PayPal, creating complete Buyer & Seller Protection for the local classifieds use case."
		},
		{
			"title": "Profit on transaction fees",
			"text": "When consumers purchase an item or service on Antengo, your properties profit from transaction fees. On average, your property will make approximately $15 per item or service listed on Antengo."
		},
		{
			"title": "Smart ads & premium listings",
			"text": "Antengo additionally monetizes for you via smart ads and premium listings that users (and your advertisers) can buy."
		}
	]

	return factory;
}])



