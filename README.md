# angular-scroll-to-top
No Dependency Scroll To Top Component for angular 1

### Installation

```sh
$ npm install angular-scroll-to-top
```

-Include the src and css file
For example:


```html
    <link rel="stylesheet" href="node_modules/angular-scroll-to-top/scroll.js" />
    <script src="node_modules/angular-scroll-to-top/scrollToTop.js">
```

<p><em>es6</em></p>
```javascript
import 'angular-scroll-to-top/scrollToTop';
```

-Then include the module into your angular app:

```javascript
angular.module('myApp',['scrollToTop']);
```

-And finally include the component somewhere in the app via HTML:
```html
<scroll-to-top></scroll-to-top>
```

###Implementation:

All logic is contained in isolate scope,
Standard javascript + CSS are used for the animations and scrolling.

The only Dependency injections are $window and $scope into the components scope.

### Development

Want to contribute? Great!

### Todos

 - Write Tests
 - Improve look of scroll icon
 - Add Code Comments
 - Add Night Mode

License
----

MIT

**Free Software, Hell Yeah!**