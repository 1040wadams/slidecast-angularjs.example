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
        controller: function SlideviewController( $scope ) {                         
            this.$onInit = function(){
                 $scope.$on( "slidecast.startAudio", function( event, args ){
                   vm.callback( { id: vm.slidesdata[ args ][1] });
                 });
            };
        
            var vm = this;
            vm.start = start;

            function start (){
                alert('Starte: '+vm.slide);
                vm.callback( { id: vm.slidesdata[ vm.slide ][1] });
            }

            vm.getAudioId = function ( slideIndex ){
                return vm.slidesdata[ slideIndex ][1];
            }

            vm.getAudioSrc = function (slideIndex ){
                return vm.slidesdata[ slideIndex ][2];
            }

        }
    });


})(window.angular);


