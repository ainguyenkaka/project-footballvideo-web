(function() {
    'use strict';

    angular
        .module('footballApp', [
            'ngResource',
            'ngAria',
            'ui.router',
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
