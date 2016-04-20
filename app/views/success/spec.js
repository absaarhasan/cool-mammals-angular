'use strict';

describe('cm.success module', function() {

    var scope, SuccessCtrl;

    beforeEach(function () {

        module('cm');

        inject(function ($controller, $rootScope , successService, $stateParams) {

            scope = $rootScope.$new();

            SuccessCtrl = $controller('SuccessCtrl', {
                $scope: scope
            });

            scope.vm = SuccessCtrl;

        });
    });

    describe('success controller', function(){

        it('should be defined', inject(function() {

            expect(SuccessCtrl).toBeDefined();

        }));
    });
});


