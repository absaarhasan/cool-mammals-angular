
'use strict';

(function() {

    angular.module('cm.add', [])
        .controller('AddCtrl',  AddCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('add', {
                    url: '/add',
                    templateUrl: "views/add/template.html",
                    controller: 'AddCtrl',
                    controllerAs: 'vm'
                })

        }]);


})();

AddCtrl.$inject = [ /*'$rootScope', 'mainService'*/];

function AddCtrl(/* $rootScope, mainService*/) {

    /* jshint validthis: true */
    /*
     var vm = this;

     vm.menuDisplay = mainService.menuDisplay;
     //       vm.activeScreens = [];
     vm.maxChapters = 22;
     vm.displayMenu = mainService.displayMenu;
     vm.adjustFont = mainService.adjustFont;
     vm.fullBook = mainService.fullBook;

     $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {

     $rootScope.previousState = from.name;
     $rootScope.previousParams = fromParams;

     });

     */
}