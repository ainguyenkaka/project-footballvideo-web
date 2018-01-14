(function() {
    'use strict';

    angular
        .module('footballApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state','$anchorScroll', '$location'];

    function NavbarController ($scope, $state,$anchorScroll, $location) {
        var vm = this;
        vm.scrollTo = scrollTo;

        function scrollTo(id) {
            $location.hash(id);
            $anchorScroll();
        }
        
    }
})();
