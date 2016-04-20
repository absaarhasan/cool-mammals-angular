'use strict';

describe('cm.add module', function() {

    var parentScope, scope, parentCtrl, AddCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', {});
        });

        inject(function ($controller, $rootScope) {

            parentScope = $rootScope.$new();

            parentCtrl = $controller('MainCtrl', {
                $scope: parentScope
            });

            parentScope.vm = parentCtrl;

            scope = parentScope.$new();

            AddCtrl = $controller('AddCtrl', {
                $scope: scope
            });

            scope.vm = AddCtrl;

        });
    });

    describe('add controller', function(){

        it('should be defined', inject(function() {

            expect(AddCtrl).toBeDefined();

        }));
    });
});

