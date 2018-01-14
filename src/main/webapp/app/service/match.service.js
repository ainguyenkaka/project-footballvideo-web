
(function () {
    'use strict';
    angular
        .module('footballApp')
        .factory('MatchService', MatchService);

    MatchService.$inject = ['$resource','DataService'];

    function MatchService($resource,DataService) {

        return $resource('', {}, {
            'getBestMatchs': { method: 'GET', cache: true , url: DataService.getApiEndpoint('BestMatch', 'A1', 'H10') }
        });

    }
})();
