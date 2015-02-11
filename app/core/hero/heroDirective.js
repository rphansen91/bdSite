splashPageApp.directive('hero', ['$document', '$window', '$rootScope', function($document, $window, $rootScope){

	return {
		restrict: 'EA',
		templateUrl: 'core/hero/hero.html',
		link: function (scope, element, attrs) {
			$document.on('scroll', function () {
				if ($window.scrollY > element.children()[1].scrollHeight) {
					$rootScope.$broadcast('below-hero')
				} else {
					$rootScope.$broadcast('above-hero')
				}
			})
			
		}
	}
}])

splashPageApp.directive('fadeUp', ['$document', '$window', function ($document, $window) {

	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			var initialWidthValue = 55;

			function setWidth (position) {
				element.css('width', (initialWidthValue + position) + '%')
			}

			$document.on('scroll', function (event) {
				setWidth(($window.scrollY/25))
			})
		}
	}
}])

splashPageApp.directive('fadeLeft', ['$document', '$window', function ($document, $window) {

	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			var initialLeftValue = -25;

			function setLeft (position) {
				element.css('left', (initialLeftValue - position) + '%')
			}

			$document.on('scroll', function (event) {
				setLeft($window.scrollY/10)
			})
		}
	}
}])

splashPageApp.directive('fadeRight', ['$document', '$window', function ($document, $window) {

	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			var initialLeftValue = -25;

			function setLeft (position) {
				element.css('right', (initialLeftValue - position) + '%')
			}

			$document.on('scroll', function (event) {
				setLeft($window.scrollY/15)
			})
		}
	}
}])