
'use strict';

(function() {

    angular.module('cm.success', [])
        .factory('successService', successService)
        .controller('SuccessCtrl',  SuccessCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('success', {
                    url: '/success/:event',
                    parent: 'main',
                    templateUrl: "views/success/template.html",
                    controller: 'SuccessCtrl',
                    controllerAs: 'vm'
                })

        }]);


})();

SuccessCtrl.$inject = [ 'successService', '$stateParams'];

function SuccessCtrl(successService, $stateParams) {

    var vm = this;

    vm.msg = successService.msg;

    successService.activate($stateParams);
}



