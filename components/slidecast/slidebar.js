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
    controller: function SlidebarController($scope) {
      var vm = this;
      vm.goToFirst = goToFirst;
      vm.goToLast = goToLast;
      vm.goToPrev = goToPrev;
      vm.goToNext = goToNext;
      vm.goToSelection = goToSelection;
      this.$onInit = function () {
        vm.folie = 0;
        vm.disabled = false;
        $scope.$on('slidecast.bar.enable', function(event,args){
          vm.disabled = false;
        });
        $scope.$on('slidecast.bar.disable', function(event,args){
          vm.disabled = true;
        });
      };
     


      function goToFirst() {
        vm.onFirst();
        vm.folie = vm.onChange();
      }

      function goToLast() {
        vm.onLast();
        vm.folie = vm.onChange();
      }

      function goToPrev() {
        vm.onPrev();
        vm.folie = vm.onChange();
      }

      function goToNext() {
        vm.onNext();
        vm.folie = vm.onChange();
      }

      function goToSelection(nr) {
        vm.onSelect({ folienIndex: nr });
      }

    }

  });

})(window.angular);