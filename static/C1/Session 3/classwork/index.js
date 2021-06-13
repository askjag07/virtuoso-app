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
 *  1. Send a prompt to get the user's name in the browser.
 *  2. Send a prompt to greet the user and ask how their day is.
 *  3. Get the sentiment score from the user's response.
 *  4. Using conditionals, find whether the user feels good or bad.
 *  5. Send a response accordingly and end the conversation.
 *
 *
 *
 *  INSTRUCTIONS
 *  Step 1: Type the prompt function to get the user's name on line 36 to complete the first goal.
 *
 *  Step 2: Type the prompt function to greet the user and ask how the user's day is on line 37 to complete the second goal.
 *
 *  Step 3: Create a sentiment analysis model using ml5js and predict the sentiment when ready.
 *
 *  Step 4: If the score is less than 0.5 or greater than 0.5, send the most logical alert to end the coversation on lines 43 and 45.
 *
 *  NOTE: A sentiment score of 0 means negative and 1 means positive.
 */

var sample
var classifier

var setup = function () {
  // var name =
  // sample =
  classifier = ml5.sentiment('movieReviews', onReady)
}
var onReady = function () {
  var result = classifier.predict(sample)
  if (result.score > 0.5) {
  } else {
  }
}
