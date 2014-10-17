bs_alert = function() {}
bs_alert.success = function(message) {
  $('#alert').html('<div class="alert alert-success alert-dismissible" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
    '<strong>Well done!</strong> '+message+
    '</div>')
}
bs_alert.info = function(message) {
  $('#alert').html('<div class="alert alert-info alert-dismissible" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
    '<strong>Heads up!</strong> '+message+
    '</div>')
}
bs_alert.warning = function(message) {
  $('#alert').html('<div class="alert alert-warning alert-dismissible" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
    '<strong>Warning!</strong> '+message+
    '</div>')
}
bs_alert.danger = function(message) {
  $('#alert').html('<div class="alert alert-danger alert-dismissible" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
    '<strong>Oh snap!</strong> '+message+
    '</div>')
}

var API_URL = '/API';

var ngApp = angular.module('ngApp', ['ngResource', 'ngRoute', 'ngAnimate']);

ngApp.config(function ($routeProvider) {
  $routeProvider
    .when('/view-1', {
      templateUrl:'views/1.html',
      controller: 'View1'
    })
    .when('/view-2', {
      templateUrl:'views/2.html',
      controller: 'View2'
    })
    .when('/view-3', {
      templateUrl:'views/3.html',
      controller: 'View3'
    })
    .otherwise({
      redirectTo: '/view-1'
    });
});


ngApp.controller('main', function ($scope, $location) {
  $scope.go = function(view) {
    $location.path(view);
  }
});


ngApp.controller('View1', function ($scope, $http, $location) {
  $scope.message = "Welcome to View 1";
});

ngApp.controller('View2', function ($scope, $http, $location) {
  $scope.message = "Welcome to View 2";
});

ngApp.controller('View3', function ($scope, $http, $location) {
  $scope.message = "Welcome to View 3";
});
