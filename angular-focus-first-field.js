(function() {
  'use strict';

  angular.module('angular-focus-first-field', [])
    .directive('focusFirstField', function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
          $timeout(function() {
            var stop = false;
            var first = null;
            var inputs = $element.find('input');
            angular.forEach(inputs, function(input) {
              if (!first) {
                first = input;
              }

              var jqLiteInput = angular.element(input);
              var val = jqLiteInput.val();
              if (!stop && !val.length) {
                input.focus();
                stop = true;
              }
            });

            if (!stop && first) {
              first.focus();
            }
          });
        }
      };
    });
})();
