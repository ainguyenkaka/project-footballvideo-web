(function() {
    'use strict';

    angular
        .module('footballApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','MatchService','DataUtils','$sce'];

    function HomeController ($scope, $state,MatchService,DataUtils,$sce) {
        var vm = this;
        vm.bestMatches = [];
        vm.bestOne = {};

        loadBestMatches();

        function loadBestMatches() {
            MatchService.getBestMatchs({}, onSuccess, onError);

            function onSuccess(data) {
                vm.bestMatches = DataUtils.getArrayDataFromSheet(data);
                vm.bestOne = vm.bestMatches[3];
                vm.bestOne['youtubeUrl'] = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + vm.bestOne.youtubeId);
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();
