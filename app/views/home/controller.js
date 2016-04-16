
'use strict';

(function() {

angular.module('cm.home', ['ellipsisFilter'])
    .controller('HomeCtrl',  HomeCtrl)
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                parent: 'main',
                templateUrl: "views/home/template.html",
                controller: 'HomeCtrl',
                controllerAs: 'vm'

            })

    }]);


})();

HomeCtrl.$inject = ['$scope'];

function HomeCtrl($scope) {

    var vm = this;

    vm.mammals = $scope.$parent.vm.mammals;

}