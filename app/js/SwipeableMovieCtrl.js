angular.module("app").controller("SwipeableMovieCtrl", function($scope, $element){
  console.log("SwipeableMovieCtrl initialized");

  var loadedImages;
  var maxIndex;
  var pixelsPerIndex = 1;

  var curIndex = 0;

  var canvas = $element[0];
  var context = canvas.getContext("2d");

  loadImages();

  /**
   *
   * @param images
   */
  function imagesLoaded(images){
    console.log("images loaded!");
    console.log(images);

    loadedImages = images;

    var imagesLen = images.length,
      canvasWidth = 1024;

    //store the max index
    maxIndex = images.length-1;

    //if there are no images yet, then just set the pixelsPerIndex to 0
    pixelsPerIndex = imagesLen > 0 ? Math.ceil((canvasWidth * .8) / (imagesLen)) : 0;

    //draw the first image
    context.drawImage(images[curIndex], 0, 0);
  }

  /**
   *
   * @param sources
   */
  function loadImages() {
    var loadedImages = 0;
    var images = [];
    var frames = $scope.frames;
    var image;
    var source;
    var ii = 0;

    //start loading all the images
    for (ii = 0; ii < frames.length; ii++) {
      //get the current source
      source = frames[ii];

      //create temp image
      image = new Image();

      //set the on load functions
      image.onload = function() {
        if (++loadedImages >= frames.length) {
          imagesLoaded(images);
        }
      };

      //keep track of all of the images
      images.push(image);

      //set the source, which causes the initial load
      image.src = source.src;
    }
  }

});