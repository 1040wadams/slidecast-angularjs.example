(function (angular) {
    'use strict';

    //
    // Needs import in index.html to solve dependency 'ngSanitize'
    //
    // <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>
    //

    var modul = angular.module('slidecastApp', ['ngSanitize']);

    modul.component('slidecast', {
        bindings: {
            titel: '@',
            slides: '<',
            slidesArrayName: '@'
        },
        templateUrl: '../components/slidecast/slidecast.html',
        controller: function SlidecastController($window, $scope, $timeout) {
            var vm = this;
            vm.getSlidesNavData = getSlidesNavData;
            vm.getSlidesViewData = getSlidesNavData;
            vm.getCurrentSlide = getCurrentSlide;
            vm.starteAudio = starteAudio;
            vm.getLastIndex = getLastIndex;
            vm.setzeAufFolie = setzeAufFolie;
            vm.setzeAufErsteFolie = setzeAufErsteFolie;
            vm.setzeAufLetzteFolie = setzeAufLetzteFolie;
            vm.setzeAufVorherigeFolie = setzeAufVorherigeFolie;
            vm.setzeAufNaechsteFolie = setzeAufNaechsteFolie;

            this.$onInit = function () {               
                this.play = $window.Play;
                this.alleFolien = $window[this.slidesArrayName];
                this.slidesNavData = getSlidesNavData();
                this.slidesViewData = getSlidesViewData();
                this.folie = 0;
                $scope.$on('slidecast.event', function(event,args){
                    $scope.$broadcast(args.eventName, args);
                });
                $timeout( function(){
                    $scope.$broadcast("slidecast.startAudio", vm.folie);
                }, 1000);
            };

            function getSlidesNavData() {
                var result = [];
                vm.slides.forEach(function (item) {
                    result.push([item[0], item[1]]);
                });
                return result;
            }

            function getSlidesViewData() {
                var result = [];
                vm.slides.forEach(function (item) {
                    result.push([item[2], item[3], item[4]]);
                });
                return result;
            }

            function starteAudio(folienIndex) {
                $scope.$broadcast("slidecast.startAudio", folienIndex);
            }

            function getCurrentSlide() {
                return this.folie;
            }

            function getLastIndex() {
                return vm.slides.length - 1;
            }

            function setzeAufFolie(folienIndex) {
                vm.folie = folienIndex;
                vm.starteAudio(vm.folie);
            }

            function setzeAufErsteFolie() {
                vm.folie = 0;
                vm.starteAudio(vm.folie);
            }

            function setzeAufLetzteFolie() {
                vm.folie = vm.getLastIndex();
                vm.starteAudio(vm.folie);
            }

            function setzeAufVorherigeFolie() {
                var minIndex = 0;
                vm.folie--;
                if (vm.folie < minIndex) {
                    vm.folie = minIndex;
                }
                vm.starteAudio(vm.folie);
            }

            function setzeAufNaechsteFolie() {
                var lastIndex = vm.getLastIndex();
                vm.folie++;
                if (vm.folie > lastIndex) {
                    vm.folie = lastIndex;
                }
                vm.starteAudio(vm.folie);
            }

        }

    });

})(window.angular);