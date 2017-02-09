# angular-scroll-to-top
No Dependency Scroll To Top Component for angular 1

To Use:

npm install angular-scroll-to-top

Include the src file
For example:

es2015
<script src="node_modules/angular-scroll-to-top/scrollToTop.js"></script>

Then include the module into your angular app:
angular.module('myApp',['scrollToTop']);

And finally include the component somewhere in the app via HTML:

<scroll-to-top></scroll-to-top>

Implementation:

All logic is contained in isolate scope,
Standard javascript + CSS are used for the animations and scrolling.

The only Dependency injections are $window and $scope into the components scope.

Future development will improve the look of the scroll button from a simple chevron.
