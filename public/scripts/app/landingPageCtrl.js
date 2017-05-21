define(['angular'],function(angular){
    'use strict';
    var landingPageCtrl = angular.module('landingPageCtrl', []);
    landingPageCtrl.controller('landingPageCtrl', ['$scope','$location',
        function ($scope,$location) {

            console.log("i am in landinPageCtrl ctrl ----")
            $scope.userName="Revee Luiz";
            $scope.userLevel="(Level 3 Advangelist)"
            $scope.showCampaingsEvangelized=function(){
                $location.path("/evengelizedCampaigns");
            }
            $scope.showMoreBrands=function(){
                $location.path("/moreBrands");
            }
        }


    ]);

});