'use strict';

successService.$inject = [ ];

function successService() {

    var service = {
        msg: { response: '' },
        activate: activate
    };

    return service;

    function activate($stateParams) {

        console.log($stateParams.event)
        console.log('A')

        if ($stateParams.event === 'add') {

            service.msg.response = "Your new mammal has been added!"
            console.log('B')

        } else if ($stateParams.event === 'edit') {

            service.msg.response = "Your changes are now live!"
            console.log('C')

        } else if ($stateParams.event === 'delete') {

            service.msg.response = "This mammal has now been deleted!"
            console.log('D')

        } else {

            service.msg.response = "Oops, you appear to have landed here by mistake ..."
            console.log('E')

        }
    }
}


