
'use strict';

(function() {

    angular.module('cm.edit', [])

        .controller('EditCtrl',  EditCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('edit', {
                    url: '/edit/:id',
                    parent: 'main',
                    templateUrl: "views/edit/template.html",
                    controller: 'EditCtrl',
                    controllerAs: 'vm'
                })

        }]);


})();

EditCtrl.$inject = [ '$scope', '$state', '$filter', '$stateParams'];

function EditCtrl($scope, $state, $filter, $stateParams) {

    var mammals = $scope.$parent.vm.mammals;
    var mammal = $filter('filter')(mammals, {id: $stateParams.id})[0];
    var index = mammals.indexOf(mammal);

    var vm = this;

    vm.mammal = mammal;
    vm.editMammal = function (){

        $scope.$parent.vm.mammals[index] = this.mammal;
        $state.go('success', { event: 'edit'});

    };

}






