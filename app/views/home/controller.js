
'use strict';

(function() {

angular.module('cm.home', [])
    .controller('HomeCtrl',  HomeCtrl)
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: "views/home/template.html",
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })

    }]);


})();

HomeCtrl.$inject = [ /*'$rootScope', 'mainService'*/];

function HomeCtrl(/* $rootScope, mainService*/) {

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