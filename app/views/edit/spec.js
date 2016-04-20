'use strict';

describe('cm.edit module', function() {

    var parentScope, scope, parentCtrl, EditCtrl;

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

            EditCtrl = $controller('EditCtrl', {
                $scope: scope
            });

            scope.vm = EditCtrl;

        });
    });

    describe('edit controller', function(){

        it('should be defined', inject(function() {

            expect(EditCtrl).toBeDefined();

        }));
    });
});

