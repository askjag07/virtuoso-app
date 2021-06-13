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
 *  1. Create a chatbot with your own creativity. Good luck!
 *
 *
 *
 *  INSTRUCTIONS
 *  Listen carefully in class.
 */

var classifier
var startBtn
var stages = [
  { yes: 'Hello! Was your day good?', no: 'Hello! Was your day good?' },
  { yes: 'That is great to hear.', no: 'That is great to hear.' },
]
var stage = 0

var setup = function () {
  noCanvas()
  startBtn = createButton('start')
  startBtn.class('button is-primary')
  startBtn.mousePressed(startConv)
  classifier = ml5.soundClassifier('SpeechCommands18w', {
    probabilityThreshold: 0.95,
  })
}
var startConv = function () {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello!'))
  classifier.classify(onResult)
}
var onResult = function (error, results) {
  if (error) {
    alert('Error: ' + error)
  } else {
  }
}
