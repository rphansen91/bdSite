splashPageApp.directive('footer', ['navigationService', '$location', '$window', function (navigationService, $location, $window) {
	return {
		restrict: 'EA',
		templateUrl: 'shared/footer/footer.tpl.html',
		link: function (scope, element, attrs) {
			scope.links = navigationService.links
			scope.socials = navigationService.socials

			console.log(scope.socials)

			scope.goTo = function (path) {
				$location.path(path)
			}
			scope.open = function (link) {
				$window.open(link)
			}
		}
	}
}])