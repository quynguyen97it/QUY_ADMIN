﻿var rootApp = angular.module("rootApp", ["ngRoute","ngResource","ui.bootstrap"]);
rootApp.run(function ($rootScope) {
    // $rootScope.loggedIn = true;
    // $rootScope.userType = 'student';
});

rootApp.controller("rootappController", function ($scope) {
    $scope.$on("logstateChange", function (event, obj) {
        $scope.loggedIn = obj.loggedIn;
        $scope.$broadcast("headerChange", {
            loggedIn: true
        })
    });
});
