angular.module('scrollToTop',[])
.component('scrollToTop',  {
    controller: function($window, $scope) {
        $scope.scrollToTop = function() {
            var id = requestAnimationFrame(smoothScrollUp);
            changeFade("fadeOut");
        };

        function smoothScrollUp(){
            if($window.pageYOffset <= 21) {
                $window.scrollTo(0, 0);
                cancelAnimationFrame(id);
            } else {
                $window.scrollTo(0, $window.pageYOffset - 20);
                var id = requestAnimationFrame(smoothScrollUp);
            }
        }

        $scope.atTop = function(){
            if($window.pageYOffset < 50) {
                return true;
            }
            changeFade("fadeIn");
            return false;
        };

        $scope.fade = 'fadeIn';

        function changeFade(newFade) {
            $scope.fade = newFade;
        };

        angular.element($window).bind("scroll", function() {
            $scope.visible = false;
            $scope.$apply();
        });
    },
    templateUrl: 'scrollbutton.html',
    transclude: true
    }
);

