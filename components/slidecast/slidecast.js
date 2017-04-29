(function (angular) {
    'use strict';

    //
    // Needs import in index.html to solve dependency 'ngSanitize'
    //
    // <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>
    //

    var modul = angular.module('slidecastApp', ['ngSanitize', 'eventsApp']);

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
            vm.initialisiereNeueFolie = initialisiereNeueFolie;
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
                vm.isBarInactive = [ false ];
                $scope.$on('slidecast.event', function (event, args) {
                    if (args.args) {
                        $scope.$broadcast(args.eventName, args.args);
                    } else {
                        $scope.$broadcast(args.eventName);
                    }
                });
                $timeout(function () {                    
                    vm.initialisiereNeueFolie();
                }, 1000);
            };

            function getSlidesNavData() {
                var result = [];
                vm.slides.forEach(function (item) {
                    result.push([item[0], item[1], item[3]]);
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

            function initialisiereNeueFolie() {
                $scope.$broadcast("slidecast.startAudio", vm.folie);
            }

            function getCurrentSlide() {
                return this.folie;
            }

            function getLastIndex() {
                return vm.slides.length - 1;
            }

            function setzeAufFolie(folienIndex) {
                vm.folie = folienIndex;
                vm.initialisiereNeueFolie();
            }

            function setzeAufErsteFolie() {
                vm.folie = 0;
                vm.initialisiereNeueFolie();
            }

            function setzeAufLetzteFolie() {
                vm.folie = vm.getLastIndex();
                vm.initialisiereNeueFolie();
            }

            function setzeAufVorherigeFolie() {
                var minIndex = 0;
                vm.folie--;
                if (vm.folie < minIndex) {
                    vm.folie = minIndex;
                }
                vm.initialisiereNeueFolie();
            }

            function setzeAufNaechsteFolie() {
                var lastIndex = vm.getLastIndex();
                vm.folie++;
                if (vm.folie > lastIndex) {
                    vm.folie = lastIndex;
                }
                vm.initialisiereNeueFolie();
            }

        }

    });

})(window.angular);