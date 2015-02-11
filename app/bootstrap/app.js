'use strict';


var splashPageApp = angular.module('splashPageApp', [
    'ngRoute', 'duScroll'
])


splashPageApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'core/main.html',
        controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'core/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

splashPageApp.factory('navigationService', [function(){
    
    var factory = {}

    factory.links = [
        {
            "path": "/about",
            "text": "ABOUT US"
        },
        {
            "path": "/contact",
            "text": "CONTACT"
        },
        {
            "path": "/careers",
            "text": "CAREERS"
        },
        {
            "path": "/press",
            "text": "PRESS"
        },
        {
            "path": "/privacy",
            "text": "PRIVACY POLICY"
        },
        {
            "path": "/terms",
            "text": "TERMS OF USE"
        }
    ]

    factory.socials = [
        {
            type: 'fa-facebook',
            link: 'https://www.facebook.com/Antengo'
        },
        {
            type: 'fa-twitter',
            link: 'https://twitter.com/antengo'
        },
        {
            type: 'fa-linkedin',
            link: 'https://www.linkedin.com/company/antengo'
        }
    ]

    return factory;
}])
