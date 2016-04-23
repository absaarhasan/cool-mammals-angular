'use strict';

describe('cm.success module', function() {

    var scope, SuccessCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('successService', {
                msg: { response: '' },
                activate: function(){}
            });
        });


        inject(function ($controller, $rootScope ) {

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

        it('should receive a success message', function() {

            expect(scope.vm.msg).toBeDefined();

        });
    });
});

describe('cm.success service', function() {

    var successService, stateParams, state;

    beforeEach(function () {

        module('cm');

        inject(function($injector , $stateParams , $state, $rootScope) {

            successService = $injector.get('successService');

            stateParams = $stateParams;

            state = $state;

        });
    });

    describe('success service', function(){

        it('should be defined', inject(function() {

            expect(successService).toBeDefined();

        }));

        it('should respond to URL', function() {

            expect(state.href("success", { event: 'edit' })).toEqual('#/success/edit');
        });

        it('should respond with the correct delete message', function() {

            state.params.event = "delete";

            successService.activate(state.params);

            expect(successService.msg.response).toMatch("This mammal has now been deleted!");

        });

        it('should respond with the correct add message', function() {

            state.params.event = "add";

            successService.activate(state.params);

            expect(successService.msg.response).toMatch("Your new mammal has been added!");

        });

        it('should respond with the correct edit message', function() {

            state.params.event = "edit";

            successService.activate(state.params);

            expect(successService.msg.response).toMatch("Your changes are now live!");

        });

        it('should respond with the correct error message', function() {

            state.params.event = "";

            successService.activate(state.params);

            expect(successService.msg.response).toMatch("Oops, you appear to have landed here by mistake ...");

        });


    });
});

