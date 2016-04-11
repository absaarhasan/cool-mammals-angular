'use strict';

describe('cm.home module', function() {

    var HomeCtrl;

    beforeEach(module('cm'));

    beforeEach(inject(function ($controller, $state) {

        HomeCtrl = $controller('HomeCtrl');

    }));

    describe('home controller', function(){

        it('should be defined', inject(function() {

            expect(HomeCtrl).toBeDefined();

        }));
    });
});
