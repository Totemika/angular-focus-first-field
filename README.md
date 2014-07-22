angular-focus-field-field
=====================

AngularJS directive that focuses the first empty input

Usage
-----

###Basic

Inspects the input children of the form and focuses the first one that has no value

    <ng-form name="myForm" focus-first-field>
    </ng-form>

###Trigger

Define a condition that when true will cause the focus code to execute

#### .js
    angular.module('myApp')
        .controller('myCtrl', function($scope, $timeout) {
            $scope.myTrigger = false;
            $timeout(function() {
                $scope.myTrigger = true;
            });
        });


#### .html
    <ng-form name="myForm"
        focus-first-field
        focus-first-field-trigger="myTrigger">
    </ng-form>

###Timeout Attempts

In the situation where the input fields are not available immediately (like generated
by another directive), specify the number of timeouts (or digest cycles) it will take
for those fields to be ready (defaults to 5 attempts)

    <ng-form name="myForm"
        focus-first-field
        focus-first-field-timeout-attempts="2">
    </ng-form>


Installation
---------
Bower:

    bower install angular-focus-field-field --save


Example
---------
See [index.html](https://github.com/chrisronline/angular-focus-field-field/blob/master/index.html)
