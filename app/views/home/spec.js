'use strict';

describe('cm.home module', function() {

    var parentScope, scope, parentCtrl, homeCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', []);
        });




        inject(function ($controller, $rootScope) {

            parentScope = $rootScope.$new();

            parentCtrl = $controller('MainCtrl', {
                $scope: parentScope
            });

            parentScope.vm = parentCtrl;

            scope = parentScope.$new();

            homeCtrl = $controller('HomeCtrl', {
                $scope: scope
            });

            scope.vm = homeCtrl;

        });
    });

    describe('home controller', function(){

        it('should be defined', inject(function() {

            expect(homeCtrl).toBeDefined();

        }));

        it('should receive mammal data', function() {

            expect(scope.vm.mammals).toBeDefined();

        });
    });
});
