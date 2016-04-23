'use strict';

successService.$inject = [ ];

function successService() {

    var service = {
        msg: { response: '' },
        activate: activate
    };

    return service;

    function activate($stateParams) {


        if ($stateParams.event === 'add') {

            service.msg.response = "Your new mammal has been added!"

        } else if ($stateParams.event === 'edit') {

            service.msg.response = "Your changes are now live!"

        } else if ($stateParams.event === 'delete') {

            service.msg.response = "This mammal has now been deleted!"

        } else {

            service.msg.response = "Oops, you appear to have landed here by mistake ..."

        }
    }
}


