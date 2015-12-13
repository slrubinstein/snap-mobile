'use strict';

module.exports = ['$scope', 'ExampleService', function($scope, ExampleService) {

  $scope.myHTML = null;

  $scope.fetchRandomText = function() {
    ExampleService.doSomethingAsync()
      .then(ExampleService.fetchSomethingFromServer)
      .then(function(response) {
          $scope.myHTML = response.data;
          // close pull to refresh loader
          $scope.$broadcast('scroll.refreshComplete');
      });
  };

    $scope.fetchRandomText();
  }
];
