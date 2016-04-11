'use strict';

(function() {

  angular.module('cm', ['ui.router', 'ui.bootstrap', 'cm.home', 'cm.details', 'cm.add'])

      .directive('mainNav', mainNav)
      .directive('mainJumbotron', mainJumbotron)
      .directive('mainFooter', mainFooter)
      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

      }])
      .run(['$rootScope','$state' , function ($rootScope, $state) {

            $rootScope.$state = $state;

      }]);

})();
