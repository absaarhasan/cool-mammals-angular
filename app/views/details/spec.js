'use strict';

describe('cm.details module', function() {

    var parentScope, scope, parentCtrl, DetailsCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', []);
        });

        inject(function ($controller, $rootScope , $filter , $stateParams , $state) {

            parentScope = $rootScope.$new();

            parentCtrl = $controller('MainCtrl', {
                $scope: parentScope
            });

            parentScope.vm = parentCtrl;

            scope = parentScope.$new();

            DetailsCtrl = $controller('DetailsCtrl', {
                $scope: scope
            });

            scope.vm = DetailsCtrl;

        });
    });

    describe('details controller', function(){

        it('should be defined', inject(function() {

            expect(DetailsCtrl).toBeDefined();

        }));
    });
});


