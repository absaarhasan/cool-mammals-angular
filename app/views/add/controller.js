'use strict';

(function() {

    angular.module('cm.add', [])
        .controller('AddCtrl',  AddCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('add', {
                    url: '/add',
                    parent: 'main',
                    templateUrl: "views/add/template.html",
                    controller: 'AddCtrl',
                    controllerAs: 'vm'
                })

        }]);

})();

AddCtrl.$inject = [ '$scope', '$state'];

function AddCtrl($scope, $state) {

    var newId = $scope.$parent.vm.newId;
    var mammal = {'id': newId};

    var vm = this;

    vm.mammal = mammal;
    vm.addMammal = function (){

        $scope.$parent.vm.newId = ++ newId;
        $scope.$parent.vm.mammals.push(this.mammal);
        $state.go('success', { event: 'add'});

    };

}


