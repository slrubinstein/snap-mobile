'use strict';

/**
 * @ngdoc function
 * @name Snaproom.service:ExampleService
 * @description
 * # ExampleService
 */
module.exports = [
    '$http',
    '$timeout',
    '$q',
    'ApiService',

    function( $http, $timeout, $q, ApiService )
    {
      var kindOfPrivateVariable = 42;

      var doSomethingAsync = function() {
        var deferred = $q.defer();
        $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
        return deferred.promise;
      };

      var fetchSomethingFromServer = function() {
        return $http({
            url: ApiService.getEndpoint() + '/api/room',

            method: 'GET'
          })
          .success(function(data) {
            console.log('fetched this stuff from server:', data);
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };

      // public api
      return {
        doSomethingAsync: doSomethingAsync,
        fetchSomethingFromServer: fetchSomethingFromServer
      };
    }
];
