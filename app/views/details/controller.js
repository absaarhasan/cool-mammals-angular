
'use strict';

(function() {

    angular.module('cm.details', [])
        .controller('DetailsCtrl',  DetailsCtrl)
        .config(['$stateProvider', function($stateProvider) {


            $stateProvider

                .state('details', {
                    url: '/details/:id',
                    parent: 'main',
                    templateUrl: "views/details/template.html",
                    controller: 'DetailsCtrl',
                    controllerAs: 'vm'
                })

        }]);


})();

DetailsCtrl.$inject = [ '$scope', '$filter', '$stateParams', '$state'];

function DetailsCtrl($scope, $filter, $stateParams , $state) {

    var mammals = $scope.$parent.vm.mammals;
    var mammal = $filter('filter')(mammals, {id: $stateParams.id})[0];
    var index = mammals.indexOf(mammal);

    var vm = this;

    vm.mammal = mammal;
    vm.delete = function (){

        $scope.$parent.vm.mammals.splice(index,1)
        $state.go('success', { event: 'delete'});

    };

}