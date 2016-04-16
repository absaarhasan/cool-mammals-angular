'use strict';

successService.$inject = [ '$stateParams'];

function successService($stateParams) {

    var service = {
        msg: successMsg($stateParams)
    };

    return service;
}

function successMsg(stateParams) {

    if (stateParams.event === 'add') {

        return "Your new mammal has been added!"

    } else if (stateParams.event === 'edit') {

        return "Your changes are now live!"

    } else if (stateParams.event === 'delete') {

        return "This mammal has now been deleted!"
    }
}
