(function (angular) {
    'use strict';

    var modul = angular.module('slidecastApp');

    modul.component('slideview', {
        bindings: {
            slidesdata: '<',
            titel: '@',
            slide: '<',
            callback: '&'
        },
        transclude: true,
        templateUrl: '../components/slidecast/slideview.html',
        controller: function SlideviewController($scope) {
            var vm = this;           
            this.$onInit = function () {
                $scope.$on("slidecast.startAudio", function (event, args) {
                    vm.callback({ id: vm.slidesdata[args][1] });
                });   
            };

            vm.getAudioId = function (slideIndex) {
                return vm.slidesdata[slideIndex][1];
            }

            vm.getAudioSrc = function (slideIndex) {
                return vm.slidesdata[slideIndex][2];
            }

        }
    });


})(window.angular);


