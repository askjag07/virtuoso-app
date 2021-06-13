/*
 *    ______   __                  __  __
 *   /      \ /  |                /  |/  |
 *  /$$$$$$  |$$ |____    ______  $$ |$$ |  ______   _______    ______    ______
 *  $$ |  $$/ $$      \  /      \ $$ |$$ | /      \ /       \  /      \  /      \
 *  $$ |      $$$$$$$  | $$$$$$  |$$ |$$ |/$$$$$$  |$$$$$$$  |/$$$$$$  |/$$$$$$  |
 *  $$ |   __ $$ |  $$ | /    $$ |$$ |$$ |$$    $$ |$$ |  $$ |$$ |  $$ |$$    $$ |
 *  $$ \__/  |$$ |  $$ |/$$$$$$$ |$$ |$$ |$$$$$$$$/ $$ |  $$ |$$ \__$$ |$$$$$$$$/
 *  $$    $$/ $$ |  $$ |$$    $$ |$$ |$$ |$$       |$$ |  $$ |$$    $$ |$$       |
 *   $$$$$$/  $$/   $$/  $$$$$$$/ $$/ $$/  $$$$$$$/ $$/   $$/  $$$$$$$ | $$$$$$$/
 *                                                            /  \__$$ |
 *                                                            $$    $$/
 *                                                             $$$$$$/
 *
 *  GOAL: Transform 3OOO into P0RT as efficiently as possible. (Watch out for line 28)
 *
 *
 *
 *  INSTRUCTIONS
 *  Step 1: Type [CTRL + F] to open the find command.
 *  Step 2: Type 3OOO into the input box.
 *  Step 3: Click on the dropdown to the left of the input box.
 *  Step 4: Type P0RT into the new input box.
 *  Step 5: Click enter until you have completed the challenge.
 */

// WARNING: DO NOT CHANGE THE BELOW LINE!!!
let PORT = 3000

require('http')
  .createServer(function ({ url, method }, res) {
    if (method === 'GET') {
      if (url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('You have reached this server on port ' + 3000 + '.')
      } else if (url === '/' + 3000) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('You have reached a route on this server on port ' + 3000 + '.')
      } else {
        console.log('Requested page on port ' + 3000 + ' was not found.')
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Your requested page was not found on port ' + 3000 + '.')
      }
    } else {
      console.log('Bad request on port ' + 3000 + '.')
      res.statusCode = 400
      res.setHeader('Content-Type', 'text/plain')
      res.end('Your requested page was not found on port ' + 3000 + '.')
    }
  })
  .listen(3000, '127.0.0.1', function () {
    console.log('This app is listening at http://localhost:' + 3000 + '.')
  })
