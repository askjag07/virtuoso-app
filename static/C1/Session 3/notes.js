/*
 *   __    __              __                         
 *  /  \  /  |            /  |                        
 *  $$  \ $$ |  ______   _$$ |_     ______    _______ 
 *  $$$  \$$ | /      \ / $$   |   /      \  /       |
 *  $$$$  $$ |/$$$$$$  |$$$$$$/   /$$$$$$  |/$$$$$$$/ 
 *  $$ $$ $$ |$$ |  $$ |  $$ | __ $$    $$ |$$      \ 
 *  $$ |$$$$ |$$ \__$$ |  $$ |/  |$$$$$$$$/  $$$$$$  |
 *  $$ | $$$ |$$    $$/   $$  $$/ $$       |/     $$/ 
 *  $$/   $$/  $$$$$$/     $$$$/   $$$$$$$/ $$$$$$$/ 
 *
 *  Complex Types of Variables
 */



/*
 *  Type 1: Array
 * 
 *  Examples:
 */
var array = ['value', 'value', 'value', 'value', 'value', 'value', 'value', 'value', 'value']
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
var array = [true, false, true, false, true, true, false, true, true, false, true, true, true]
var array = [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]



/*
 *  Type 2: Object
 * 
 *  Examples:
 */
var object = {
  key: 'value',
  key1: 1,
  key2: false,
  key3: ['value', 'value'],
  key4: [1, 2],
  key5: [true, false],
}
var object = [
  {
    name: 'Akshaj',
    email: 'askjag07@gmail.com',
    password: 'AVerySecretPassword',
  },
  {
    name: 'Someone',
    email: 'someone@gmail.com',
    password: 'JustAnotherSecretPassword',
  },
  {
    name: 'Someone Else',
    email: 'someone@else.com',
    password: 'AnotherVerySecretPassword',
  },
]



/*
 *  Type 3: Function
 * 
 *  Examples:
 */
var functi0n = function() {
  return 'Hello!'
}
var functi0n = function(name) {
  return 'Hello ' + name + '!'
}
var functi0n = function() {
  alert('Hello!')
}



/*
 *   __    __              __                         
 *  /  \  /  |            /  |                        
 *  $$  \ $$ |  ______   _$$ |_     ______    _______ 
 *  $$$  \$$ | /      \ / $$   |   /      \  /       |
 *  $$$$  $$ |/$$$$$$  |$$$$$$/   /$$$$$$  |/$$$$$$$/ 
 *  $$ $$ $$ |$$ |  $$ |  $$ | __ $$    $$ |$$      \ 
 *  $$ |$$$$ |$$ \__$$ |  $$ |/  |$$$$$$$$/  $$$$$$  |
 *  $$ | $$$ |$$    $$/   $$  $$/ $$       |/     $$/ 
 *  $$/   $$/  $$$$$$/     $$$$/   $$$$$$$/ $$$$$$$/ 
 *
 *  Conditional Statements
 */



/*
 *  Type 1: If
 * 
 *  Examples:
 */
if (true) {
  alert('True!')
}
if (false) {
  alert('False!') // Does not work
}

var x = 4
if (x > 3) {
  alert('True!') // Works
}
if (x < 3) {
  alert('False!') // Does not work
}

var y = 5
if (y === 5) {
  alert('True!') // Works
}
if (y === 6) {
  alert('False!') // Does not work
}



/*
 *  Type 2: If Else
 * 
 *  Examples:
 */
if (true) {
  alert('True!') // Works
} else {
  alert('False!') // Does not work
}

var x = 4
if (x > 3) {
  alert('True!') // Works
} else {
  alert('False!') // Does not work
}

var y = 5
if (y === 5) {
  alert('True!') // Works
} else {
  alert('False!') // Does not work
}

var password = 'Secret'
if (password === 'Secret') {
  alert('Authenticated!')
} else {
  alert('Incorrect password!')
}
