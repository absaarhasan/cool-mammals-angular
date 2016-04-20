'use strict';

mainService.$inject = ['$http'];

function mainService($http) {

    return $http.get('/app/assets/json/mammals.json').then(function(response){

        return response.data.mammals;

    })

}