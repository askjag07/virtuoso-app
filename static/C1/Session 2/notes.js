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
 *  Rules to Name Variables
 */



/*
 *  Rule 1:
 *  Can only start with letter, $, or _
 * 
 *  Examples:
 */
var password = 'AVeryStrongPassword' // Correct
var $password = 'AVeryStrongPassword' // Correct
var _password = 'AVeryStrongPassword' // Correct
var :password = 'AVeryStrongPassword' // Incorrect
var -password = 'AVeryStrongPassword' // Incorrect



/*
 *  Rule 2:
 *  Can only contain letters, numbers, $, or _
 * 
 *  Examples:
 */
var pa55w0rd = 'AVeryStrongPassword' // Correct
var s$cr$t = 'AVeryStrongPassword' // Correct
var pass_word = 'AVeryStrongPassword' // Correct
var p@ssword = 'AVeryStrongPassword' // Incorrect
var passw*rd = 'AVeryStrongPassword' // Incorrect



/*
 *  Rule 3:
 *  No spaces allowed
 * 
 *  Example:
 */
var password = 'AVeryStrongPassword' // Correct
var pass word = 'AVeryStrongPassword' // Incorrect



/*
 *  Rule 4:
 *  Case sensitive
 * 
 *  Example:
 *  The two variables–Password and password—are different.
 */
var password = 'AVeryStrongPassword' // Different
var Password = 'AStrongerPassword' // Different



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
 *  Simple Types of Variables
 */



/*
 *  Type 1: String
 * 
 *  Examples:
 */
var string = 'AVeryStrongPassword'
var string = "AVeryStrongPassword"
var string = `AVeryStrongPassword`



/*
 *  Type 2: Number
 * 
 *  Examples:
 */
var number = 123
var number = 1.23
var number = 10e2 // 10 to the power of 2 (or) 100
var number = 10e-2 // 10 to the power of -2 (or) 0.01



/*
 *  Type 3: Boolean
 * 
 *  Examples:
 */
var boolean = true
var boolean = false



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
 *  Accessing Chrome developer console.
 *  
 * 
 * 
 *  INSTRUCTIONS
 *  Step 1: Open the Chrome browser.
 *  Step 2: Right-click your mouse.
 *  Step 3: Select inspect.
 *  Step 4: Select the console tab on the top of the new menu.
 */