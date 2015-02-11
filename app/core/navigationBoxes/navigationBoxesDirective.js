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