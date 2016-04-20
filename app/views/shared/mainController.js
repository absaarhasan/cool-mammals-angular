'use strict';

(function() {

    angular.module('cm.main', [])
        .directive('mainNav', mainNav)
        .directive('mainJumbotron', mainJumbotron)
        .directive('mainFooter', mainFooter)
        .controller('MainCtrl',  MainCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('main', {
                    abstract: true,
                    controller: 'MainCtrl',
                    templateUrl: "views/shared/main.html",
                    controllerAs: 'vm',
                    resolve: {
                            mammals: mainService
                        }
                })

        }]);


})();

MainCtrl.$inject = [ 'mammals'];

function MainCtrl(mammals) {

    var vm = this;

    vm.mammals = mammals;
    vm.newId = mammals.length + 1;

}

