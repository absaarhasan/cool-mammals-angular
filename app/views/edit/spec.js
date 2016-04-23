'use strict';

describe('cm.edit module', function() {

    var parentScope, scope, parentCtrl, EditCtrl, state;

    beforeEach(function () {

        module('cm');

        module(function ($provide) {
            $provide.value('mammals', [{
                "id": "1",
                "name": "Gorillas",
                "description": "Gorillas live in Central Africa. There are two main species of gorilla, the Eastern Gorilla and the Western Gorilla. The Western Gorilla lives in Western Africa in countries such as Cameroon, the Congo, the Central African Republic, and Gabon. The Eastern Gorilla lives in Eastern African countries such as Uganda and Rwanda. Gorillas live in a range of habitats from swamps to forests. There are lowland gorillas which live in bamboo forests, swamps and lowland forests. There are also mountain gorillas which live in forests in the mountains. Gorillas are mostly herbivores and eat plants. The plants they eat include leaves, stems pith, fruit, and bamboo. Sometimes they will eat insects, especially ants. A full grown adult male will eat around 50 pounds of food in a day. Gorillas are the largest species of primates. The males are often twice as big as the females. The males grow to around 5 1/2 feet tall and weigh around 400 pounds. The females grow to 4 1/2 feet tall and weigh around 200 pounds. Gorillas have long arms, even longer than their legs! They use their long arms to &ldquo;knuckle-walk&rdquo;. This is where they use the knuckles on their hands to walk on all fours. They are mostly covered with brown hair. Gorillas from different areas may have different coloured hair. For example, the western gorilla has the lightest hair and the mountain gorilla has the darkest. The western lowland gorilla can also have grayish hair and red coloured forehead. When male gorillas get older their hair turns white on their back. These older males are called Silverback gorillas. "
            }]);
        });


        inject(function ($controller, $rootScope , $state) {

            parentScope = $rootScope.$new();

            parentCtrl = $controller('MainCtrl', {
                $scope: parentScope
            });

            parentScope.vm = parentCtrl;

            scope = parentScope.$new();

            EditCtrl = $controller('EditCtrl', {
                $scope: scope
            });

            scope.vm = EditCtrl;

            state = $state;

            spyOn($state, 'go');

        });
    });

    describe('edit controller', function(){

        it('should be defined', function() {

            expect(EditCtrl).toBeDefined();

        });

        it('should respond to URL', function() {

            expect(state.href("details", { id: 1 })).toEqual('#/details/1');
        });

        it('should receive mammal data', function() {

            state.go('details', { id: '1'});
            expect(scope.vm.mammal).toBeDefined();
            expect(scope.vm.mammal.name).toMatch("Gorillas");

        });

        it('should update the mammal data', function() {

            scope.vm.mammal.name = "Ape";
            scope.vm.editMammal();
            expect(parentScope.vm.mammals[0].name).toMatch("Ape");

        });

        it('should should divert to the success page', function() {

            scope.vm.editMammal();
            expect(state.go).toHaveBeenCalledWith('success', { event: 'edit'})

        });

    });
});

