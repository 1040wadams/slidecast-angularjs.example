(function (angular) {
    'use strict';

    var modul = angular.module('eventsApp', []);

    modul.directive('eventMapper', function () {

        return {
            restrict: 'A',
            scope: {
                options: '='
            },
            link: function (scope, element, attrs) {
                if (scope.options !== undefined) {
                    angular.forEach(scope.options, function (value, key) {
                        element.bind(key, value( attrs.id) );
                    });
                }
            }
        };

    });

})(window.angular);