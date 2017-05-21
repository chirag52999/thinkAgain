require.config({
    baseUrl: 'scripts/lib',
    paths :{
        'app' : '../app/app',
        'angular' :'angular/angular.min',
        'angularRoute' : 'angular-route/angular-route.min',
        'jquery' : 'jquery/dist/jquery.min',	
		'angularLocalStorage' : 'angular-local-storage/dist/angular-local-storage.min',
        'homeCtrl':'../app/homeCtrl',
        'signUpCtrl':'../app/signUpCtrl',
        'loginCtrl':'../app/loginCtrl',
        'navBarCtrl':'../app/navBarCtrl',
        'landingPageCtrl':"../app/landingPageCtrl",
        'evengelizedCampiagnCtrl':"../app/evengelizedCampiagnCtrl",
        'moreBrandsCtrl':"../app/moreBrandsCtrl"

    },
    shim: {
        
        'angular': {
            exports: 'angular'
        },
        'angularRoute' :{
            deps: ['angular'],
            exports : 'angularRoute'
        },
		'angularLocalStorage' :{
            deps: ['angular'],
            exports : 'angularLocalStorage'
        }
       
    }
});


require(['require','angular','angularRoute','angularLocalStorage','app'], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['mainApp']);
    });
});