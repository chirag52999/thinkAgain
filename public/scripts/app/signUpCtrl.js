define(['angular'],function(angular){
    'use strict';
    var signUpCtrl = angular.module('signUpCtrl', []);
    signUpCtrl.controller('signUpCtrl', ['$scope','$location',
        function ($scope,$location) {
            $scope.p=1;

            $scope.next=function(){
                $scope.p=$scope.p+1;
            };
            $scope.prev=function(){
                $scope.p=$scope.p-1;
            };
            $scope.iconsTable=2;
            $scope.action=1;
            $scope.nextIcons=function(){
                $scope.action=1;
                if($scope.iconsTable!==3){
                    $scope.iconsTable=$scope.iconsTable+1;
                }
                else {
                    $scope.iconsTable=1;
                }
            }
            $scope.prevIcons=function(){
                $scope.action=0;
                if($scope.iconsTable!==1){
                    $scope.iconsTable=$scope.iconsTable-1;
                }
                else {
                    $scope.iconsTable=3;
                }
            }

        }


    ]);

});