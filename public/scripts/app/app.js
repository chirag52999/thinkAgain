
define([
    'angular',
	'angularLocalStorage',
    'angularRoute',
    'homeCtrl',
    'signUpCtrl',
    'loginCtrl',
    'navBarCtrl',
    'landingPageCtrl',
    'evengelizedCampiagnCtrl',
    'moreBrandsCtrl'

], function (angular) {
    'use strict';

    var mainApp =  angular.module('mainApp', [
        'ngRoute',
		'LocalStorageModule',
        'homeCtrl',
        'signUpCtrl',
        'loginCtrl',
        'navBarCtrl',
        'landingPageCtrl',
        'evengelizedCampiagnCtrl',
        'moreBrandsCtrl'
    ]);

    
    mainApp.config(['$httpProvider',function ($httpProvider) {
    }]);


    mainApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/signup', {
                templateUrl: 'partials/signUp.html',
                controller: 'signUpCtrl',
                access: { requiredLogin: false }
            }). when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl',
                access: { requiredLogin: false }
            }). when('/landingPage', {
                templateUrl: 'partials/landingPage.html',
                controller: 'landingPageCtrl',
                access: { requiredLogin: false }
            }). when('/evengelizedCampaigns', {
                templateUrl: 'partials/evangelizedCampaigns.html',
                controller: 'evengelizedCampiagnCtrl',
                access: { requiredLogin: false }
            }). when('/moreBrands', {
                templateUrl: 'partials/moreBrands.html',
                controller: 'moreBrandsCtrl',
                access: { requiredLogin: false }
            }).
                otherwise({
                    redirectTo: '/signup'
                });
        }



    ]);


    mainApp.run(['$rootScope','$location',function($rootScope, $location) {
         $rootScope.app = {
                name: 'DotFresh',
                description: 'Powered by DotFresh',
                year: ((new Date()).getFullYear()),
              };
    }]);

    return mainApp;


});




