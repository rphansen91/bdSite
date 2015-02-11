splashPageApp.directive('navigationBoxes', ['navigationService', function (navigationService) {

	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: 'core/navigationBoxes/navigationBoxes.html',
		link: function (scope, element, attrs) {
			scope.sections = navigationService.sections;
		}
	}
}])

splashPageApp.directive('navigationSections', ['navigationService', function (navigationService) {

	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: 'core/navigationBoxes/navigationSections.html',
		link: function (scope, element, attrs) {
			scope.sections = navigationService.sections;
		}
	}
}])

splashPageApp.factory('navigationService', [function () {
	var factory = {}

	factory.sections = [
		{
			title: "Title One",
			anchor: "revenue"
		},
		{
			title: "Title Two",
			anchor: "welcome"
		},
		{
			title: "Title Three",
			anchor: "details"
		}
	]

	return factory;
}])