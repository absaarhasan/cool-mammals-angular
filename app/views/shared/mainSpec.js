'use strict';

describe('cm.main module', function() {

    var scope, MainCtrl;

    beforeEach(function () {

        module('cm');

        inject(function ($controller, $rootScope ) {

            scope = $rootScope.$new();

            MainCtrl = $controller('SuccessCtrl', {
                $scope: scope
            });

            scope.vm = MainCtrl;

        });
    });

    describe('main controller', function(){

        it('should be defined', inject(function() {

            expect(MainCtrl).toBeDefined();

        }));
    });
});
