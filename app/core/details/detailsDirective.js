splashPageApp.directive('details', ['detailsService', function (detailsService) {

	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: 'core/details/details.html',
		link: function (scope, element, attrs) {
			scope.points = detailsService.points
		}
	}
}])

splashPageApp.factory('detailsService', [function () {
	var factory = {}

	factory.points = [
		{
			"title": "Setup",
			"texts": [
				"Antengo is free and simple to setup (takes 3 hours, on average, for one junior web designer).",
				"We will provide you with a variety of different button options for desktop & mobile - when clicked/tapped, users will reach your property’s local marketplace.",
				"You can display Antengo within your website & mobile apps as an I-Frame, or simply pop open a new browser tab when users click the “Buy & Sell” buttons.",
				"After setup, the most modern marketplace tech. will be enabled across your digital experience."
			]
		},
		{
			"title": "Revenue Split",
			"texts": ["Antengo splits profits 50/50 with partners! We want to give you the maximum amount of upside. In return, we expect you to prominently place and promote (across all platforms, including on-air & social media) your new, world class consumer destination, provided at no cost. After all, the more folks on your digital properties / across your audience that use Antengo, the more revenue you will see."]
		},
		{
			"title": "Revenue Tracking",
			"texts": ["You will receive a custom, trackable URL for each property (e.g. Antengo.com/Mighty1090) that your audience will use. For on-air promotions, we can provide a vanity shortcode that forwards people to your custom URL. You will receive 50% of the lifetime profits from users who register for an Antengo account (takes 10 seconds) via your property’s URL, even if/when those users do not access Antengo from your URL at any point in the future (for as long as your contract with Antengo is still in good standing)."]
		},
		{
			"title": "Reporting",
			"texts": ["Antengo emails monthly reporting that includes the exact revenue breakdowns and other key metrics."]
		}
	]

	return factory;
}])