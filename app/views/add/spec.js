'use strict';

describe('cm.add module', function() {

    var parentScope, scope, parentCtrl, AddCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', []);
        });

        inject(function ($controller, $rootScope, $state ) {

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

            spyOn($state, 'go');


        });
    });

    describe('add controller', function(){

        it('should be defined', inject(function() {

            expect(AddCtrl).toBeDefined();

        }));

        it('should update the New Id value in the parent controller', inject(function() {

            scope.vm.addMammal();
            expect(parentScope.vm.newId).toEqual(2)

        }));

        it('should update the parent data', inject(function($state) {

            scope.vm.addMammal();
            expect(parentScope.vm.mammals.length).toEqual(1)

        }));

        it('should re-direct to the success page', inject(function($state) {

            scope.vm.addMammal();
            expect($state.go).toHaveBeenCalledWith('success', { event: 'add'})

        }));



    });
});

