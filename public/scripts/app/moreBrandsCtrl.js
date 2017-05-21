define(['angular'],function(angular){
    'use strict';
    var moreBrandsCtrl = angular.module('moreBrandsCtrl', []);
    moreBrandsCtrl.controller('moreBrandsCtrl', ['$scope','$location',
        function ($scope,$location) {

            $scope.userName="Revee Luiz";
            $scope.userLevel="(Level 3 Advangelist)"
            $scope.showLess=function(){
                $location.path("/landingPage");
            }

        }


    ]);

});