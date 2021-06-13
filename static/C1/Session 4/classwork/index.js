/*    ______   __                                                                 __
 *   /      \ /  |                                                               /  |
 *  /$$$$$$  |$$ |  ______    _______  _______  __   __   __   ______    ______  $$ |   __
 *  $$ |  $$/ $$ | /      \  /       |/       |/  | /  | /  | /      \  /      \ $$ |  /  |
 *  $$ |      $$ | $$$$$$  |/$$$$$$$//$$$$$$$/ $$ | $$ | $$ |/$$$$$$  |/$$$$$$  |$$ |_/$$/
 *  $$ |   __ $$ | /    $$ |$$      \$$      \ $$ | $$ | $$ |$$ |  $$ |$$ |  $$/ $$   $$<
 *  $$ \__/  |$$ |/$$$$$$$ | $$$$$$  |$$$$$$  |$$ \_$$ \_$$ |$$ \__$$ |$$ |      $$$$$$  \
 *  $$    $$/ $$ |$$    $$ |/     $$//     $$/ $$   $$   $$/ $$    $$/ $$ |      $$ | $$  |
 *   $$$$$$/  $$/  $$$$$$$/ $$$$$$$/ $$$$$$$/   $$$$$/$$$$/   $$$$$$/  $$/       $$/   $$/
 *
 *  GOALS
 *  1. Display the user's video on the screen.
 *  2. Tell the user to wear a mask if they are not wearing one.
 *  3. Congratulate the user if they are wearing a mask.
 *
 *
 *
 *  INSTRUCTIONS
 *  Listen carefully in class.
 */

var classifier
var video
var flippedVideo
var label

var setup = function () {
  classifier = ml5.imageClassifier('', onReady)
  createCanvas(320, 240)
  video = createCapture(VIDEO)
  video.size(320, 240)
  video.hide()
  flippedVideo = ml5.flipImage(video)
}
var draw = function () {
  image(flippedVideo, 0, 0)
}

var onReady = function () {
  classifier.classify(flippedVideo, onResult)
  flippedVideo.remove()
}
var onResult = function (error, results) {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, onResult)
  flippedVideo.remove()
}
