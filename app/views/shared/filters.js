angular.module('ellipsisFilter', []).filter('ellipsisFilter', [ '$filter' ,function($filter) {
    return function(input) {
        var result = $filter('limitTo')(input, 200) + ' ...';

        return result

    };
}]);