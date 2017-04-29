(function (angular) {
  'use strict';

  var modul = angular.module('slidecastApp');

  modul.component('slidebar', {
    bindings: {
      slidesdata: '<',
      first: '<',
      prev: '<',
      next: '<',
      last: '<',
      onFirst: '&',
      onLast: '&',
      onPrev: '&',
      onNext: '&',
      onSelect: '&',
      onChange: '&'
    },
    templateUrl: '../components/slidecast/slidebar.html',
    controller: function SlidebarController($scope, $timeout) {
      var vm = this;
      vm.goToFirst = goToFirst;
      vm.goToLast = goToLast;
      vm.goToPrev = goToPrev;
      vm.goToNext = goToNext;
      vm.goToSelection = goToSelection;
      vm.refresh = refresh;
      this.$onInit = function () {
        vm.folie = 0;
        vm.disabled = false;

        var folienIndex = vm.folie;
        var audioId = vm.slidesdata[vm.folie][2];
        var audio = document.getElementById(audioId);
        audio.onplay = function () {
          vm.disabled = true;
          vm.refresh();
        };
        audio.onended = function () {
          vm.disabled = false;
          vm.refresh();
        };
      };

      function refresh() {
        $timeout(function () {
          vm.onChange();
        }, 0);
      }

      function goToFirst() {
        //if (!vm.disabled) {
          vm.onFirst();
          vm.folie = vm.onChange();
        //}
      }

      function goToLast() {
        //if (!vm.disabled) {
          vm.onLast();
          vm.folie = vm.onChange();
        //}
      }

      function goToPrev() {
        //if (!vm.disabled) {
          vm.onPrev();
          vm.folie = vm.onChange();
        //}
      }

      function goToNext() {
        //if (!vm.disabled) {
          vm.onNext();
          vm.folie = vm.onChange();
        //}
      }

      function goToSelection(nr) {
        if (!vm.disabled) {
          vm.onSelect({ folienIndex: nr });
        }
      }

    }

  });

})(window.angular);