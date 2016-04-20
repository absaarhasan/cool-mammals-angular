'use strict';

describe('cm.success module', function() {

    var SuccessCtrl;


    beforeEach(module('cm.success'));

    beforeEach(inject(function ($controller, $state) {

        SuccessCtrl = $controller('SuccessCtrl');


    }));

    describe('success controller', function(){

        it('should be defined', inject(function() {

            expect(SuccessCtrl).toBeDefined();

        }));
    });

});
