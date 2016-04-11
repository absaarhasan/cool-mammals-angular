'use strict';

describe('cm.details module', function() {

    var DetailsCtrl;

    beforeEach(module('cm'));

    beforeEach(inject(function ($controller, $state) {

        DetailsCtrl = $controller('DetailsCtrl');

    }));

    describe('details controller', function(){

        it('should be defined', inject(function() {

            expect(DetailsCtrl).toBeDefined();

        }));
    });

});