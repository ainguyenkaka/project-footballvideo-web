(function () {
    'use strict';
    angular
        .module('footballApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$resource'];

    function DataService($resource) {
        var spreadsheetId = '1CvaYtv4H4FACTHrhvg3EvxiMqwOmGymO-_PS3AszQas';
        var apiKey = 'AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I';

        function getApiEndpoint(sheetName, start, end) {
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '!' + start + '%3A' + end + '?key=' + apiKey;
        }

        var service = {
            getApiEndpoint: getApiEndpoint
        };
        return service;
    }
})();
