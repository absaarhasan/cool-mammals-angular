'use strict';

/* main nav */

function mainNav() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/nav.html'
    };
    return directive;

}

/* Jumbotron */

function mainJumbotron() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/jumbotron.html'
    };
    return directive;

}

/* Footer */

function mainFooter() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/footer.html'
    };
    return directive;

}




