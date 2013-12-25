angular.module("app").directive("swipeableMovie", function(){
  return {
    restrict: "E",
    replace: true,
    templateUrl: "js/swipeable-movie.html",
    controller: "SwipeableMovieCtrl"
  }
});