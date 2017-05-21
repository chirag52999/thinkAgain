define(['angular'],function(angular){
    'use strict';
    var evengelizedCampiagnCtrl = angular.module('evengelizedCampiagnCtrl', []);
    evengelizedCampiagnCtrl.controller('evengelizedCampiagnCtrl', ['$scope','$location',
        function ($scope,$location) {

            $scope.userName="Revee Luiz";
            $scope.userLevel="(Level 3 Advangelist)"
            $scope.showLess=function(){
                $location.path("/landingPage");
            }

        }


    ]);

});