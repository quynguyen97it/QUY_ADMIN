rootApp.controller('loginController', ['$scope', '$resource', function($scope, $resource) {

  function fetchAllStudents() {
    $scope.hocvien = $resource('http://localhost:8080/hocvien').query(function(data) {
      return data;
    });
  };
  fetchAllStudents();

  $scope.refresh = function() {
    fetchAllStudents();
  };

  $scope.loginStudent = function() {
    $scope.status="";
    for (var i = 0; i < $scope.hocvien.length; i++) {
      if($scope.ID.toString()==$scope.hocvien[i].mahv.toString() && $scope.password.toString()==$scope.hocvien[i].password.toString())
      {
        $scope.status=1;
      }
      else {

      }
    }
    if($scope.status==1)
    {
      window.location="./#!/";
    }
    else {
      alert("Tên đăng nhập hoặc mật khẩu chưa đúng!");
      $scope.ID="";
      $scope.password="";
    }
  };

}]);
