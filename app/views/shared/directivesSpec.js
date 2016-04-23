'use strict';

describe('Template Directives', function() {

    var compile, rootScope;


    beforeEach(module('cm'));

    beforeEach(module('templates'));

    beforeEach(inject(function($compile, $rootScope){

        compile = $compile;
        rootScope = $rootScope;

    }));

    it('Should display the header', function() {

        var element = compile("<div main-nav></div>")(rootScope);

        rootScope.$digest();

        expect(element.html()).toContain("Cool Mammals");
    });
});