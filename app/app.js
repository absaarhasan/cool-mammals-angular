'use strict';

(function() {

  angular.module('cm', ['ui.router', 'ui.bootstrap', 'cm.main','cm.home', 'cm.details', 'cm.add', 'cm.success', 'cm.edit'])

      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

             

      }])
      .run(['$rootScope','$state' , function ($rootScope, $state) {

            $rootScope.$state = $state;

      }]);

})();


