rootApp.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
          templateUrl: "/pages/home.html",
          controller: "hocvienController"
      })
      .when("/qlhocvien", {
          templateUrl: "/pages/hocvien.html",
          controller: "hocvienController"
      })
      .when("/qltruonghoc", {
          templateUrl: "/pages/truonghoc.html",
          controller: "truonghocController"
      })
      .when("/qlkhoahoc", {
          templateUrl: "/pages/khoahoc.html",
          controller: "khoahocController"
      })
      .when("/qlmonhoc", {
          templateUrl: "/pages/monhoc.html",
          controller: "monhocController"
      })
      .when("/qldaotao", {
          templateUrl: "/pages/daotao.html",
          controller: "daotaoController"
      })
      .when("/qlchuyennganh", {
          templateUrl: "/pages/chuyennganh.html",
          controller: "chuyennganhController"
      })
      .when("/qlcanbogiangvien", {
          templateUrl: "/pages/canbogiangvien.html",
          controller: "canbogiangvienController"
      })
      .when("/qlphonghoc", {
        templateUrl: "/pages/phonghoc.html",
        controller: "phonghocController"
     })
     .when("/qldoanhnghiep", {
        templateUrl: "/pages/doanhnghiep.html",
        controller: "doanhnghiepController"
     })
     .when("/qlnguoiquanly", {
        templateUrl: "/pages/nguoiquanly.html",
        controller: "nguoiquanlyController"
     })
     .when("/qltinhnang", {
        templateUrl: "/pages/tinhnang.html",
        controller: "tinhnangController"
     })
      .otherwise({
          template: "<div class='container'><hr><h3>Không tìm thấy trang này</pages/h3><hr></pages/div></pages/br>"
      });
});
