'use strict';

describe('cm.main module', function() {

    var scope, MainCtrl;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', []);
        });

        inject(function ($controller, $rootScope ) {

            scope = $rootScope.$new();

            MainCtrl = $controller('MainCtrl', {
                $scope: scope
            });

            scope.vm = MainCtrl;

        });
    });

    describe('main controller', function(){

        it('should be defined', inject(function() {

            expect(MainCtrl).toBeDefined();

        }));

        it('should receive mammal data', function() {

            expect(scope.vm.mammals).toBeDefined();

        });

        it('should calculate a new mammal id', function() {

            expect(scope.vm.newId).toEqual(1);

        });

    });
});


describe('cm.main service', function() {

    var mainService, httpBackend;

    beforeEach(function () {

        module('cm');

        inject(function($injector ) {

            mainService = $injector.get('mainService');

            httpBackend = $injector.get('$httpBackend');

            httpBackend.when('GET', 'views/shared/main.html').respond({});

            httpBackend.when('GET', 'views/home/template.html').respond({});

            httpBackend.when('GET', '/app/assets/json/mammals.json').respond(200, {
                "mammals": [
                    {
                        "id": "1",
                        "name": "Gorillas",
                        "description": "Gorillas live in Central Africa. There are two main species of gorilla, the Eastern Gorilla and the Western Gorilla. The Western Gorilla lives in Western Africa in countries such as Cameroon, the Congo, the Central African Republic, and Gabon. The Eastern Gorilla lives in Eastern African countries such as Uganda and Rwanda. Gorillas live in a range of habitats from swamps to forests. There are lowland gorillas which live in bamboo forests, swamps and lowland forests. There are also mountain gorillas which live in forests in the mountains. Gorillas are mostly herbivores and eat plants. The plants they eat include leaves, stems pith, fruit, and bamboo. Sometimes they will eat insects, especially ants. A full grown adult male will eat around 50 pounds of food in a day. Gorillas are the largest species of primates. The males are often twice as big as the females. The males grow to around 5 1/2 feet tall and weigh around 400 pounds. The females grow to 4 1/2 feet tall and weigh around 200 pounds. Gorillas have long arms, even longer than their legs! They use their long arms to &ldquo;knuckle-walk&rdquo;. This is where they use the knuckles on their hands to walk on all fours. They are mostly covered with brown hair. Gorillas from different areas may have different coloured hair. For example, the western gorilla has the lightest hair and the mountain gorilla has the darkest. The western lowland gorilla can also have grayish hair and red coloured forehead. When male gorillas get older their hair turns white on their back. These older males are called Silverback gorillas. "
                    }
                ]
            })

            httpBackend.flush();


        });
    });

    describe('main service', function(){

        it('should be defined', inject(function() {

            expect(mainService).toBeDefined();

        }));

        it('should return JSON data', inject(function() {

            /* only the promise is returned */

        }));



    });
});

