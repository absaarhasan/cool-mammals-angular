
'use strict';

(function() {

    angular.module('cm.details', [])
        .controller('DetailsCtrl',  DetailsCtrl)
        .config(['$stateProvider', function($stateProvider) {


            $stateProvider

                .state('details', {
                    url: '/details',
                    templateUrl: "views/details/template.html",
                    controller: 'DetailsCtrl',
                    controllerAs: 'vm'
                })

        }]);


})();

DetailsCtrl.$inject = [ /*'$rootScope', 'mainService'*/];

function DetailsCtrl(/* $rootScope, mainService*/) {

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