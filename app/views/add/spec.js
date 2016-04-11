'use strict';

describe('cm.add module', function() {

    var AddCtrl;

    beforeEach(module('cm'));

    beforeEach(inject(function ($controller, $state) {

        AddCtrl = $controller('AddCtrl');

    }));

    describe('add controller', function(){

        it('should be defined', inject(function() {

            expect(AddCtrl).toBeDefined();

        }));
    });

});