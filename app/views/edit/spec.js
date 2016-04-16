'use strict';

describe('cm.edit module', function() {

    var EditCtrl;

    beforeEach(module('cm'));

    beforeEach(inject(function ($controller, $state) {

        EditCtrl = $controller('EditCtrl');

    }));

    describe('edit controller', function(){

        it('should be defined', inject(function() {

            expect(EditCtrl).toBeDefined();

        }));
    });

});