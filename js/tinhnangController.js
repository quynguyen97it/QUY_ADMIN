rootApp.controller('tinhnangController', ['$scope','$http', '$resource', 'apiBaseUrl', function($scope, $http, $resource, apiBaseUrl) {

  $scope.loadData = function() {
    $http.get('http://localhost:8080/tinhnang').then(function(res){
      $scope.tinhnangList = res.data;
    });
  }
  $scope.loadData();
  }]);
