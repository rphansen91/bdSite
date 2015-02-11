splashPageApp.directive('navbar', ['$document', '$rootScope', function ($document, $rootScope) {
	return {
		restrict: 'EA',
		templateUrl: 'shared/navbar/navbar.tpl.html',
		link: function (scope, element, attrs) {
			scope.aboveHero = true;
			
			$rootScope.$on('below-hero', function () {
				scope.$apply(function () {
					scope.aboveHero = false;
				})
			})
			$rootScope.$on('above-hero', function () {
				scope.$apply(function () {
					scope.aboveHero = true;
				})
			})
		}
	}
}])