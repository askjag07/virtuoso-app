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
 *  1. Create a program that draws a clown mask on the user's face.
 *
 *
 *
 *  INSTRUCTIONS
 *  Listen carefully in class.
 */

var video
var classifier
var noseX
var noseY
var eyelX
var eyelY
var eyerX
var eyerY

var setup = function () {
  createCanvas(320, 240)
  video = createCapture(VIDEO)
  video.size(320, 240)
  video.hide()
  video = ml5.flipImage(video)
  classifier = ml5.poseNet(video)
  classifier.on('pose', onPose)
}
var draw = function () {
  image(video, 0, 0)
}
var onPose = function (poses) {}
