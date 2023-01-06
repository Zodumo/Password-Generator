// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// 
// Function to prompt user for password options
// Function to prompt user for password options
function getPasswordOptions(lowercase, uppercase, numeric, special) {
  // Validate password length
  while (true) {
    // Prompt for password length
    var length = prompt(
      'Enter the length of the password (between 10 and 64 characters):'
    );

    // Validate password length
    if (length >= 10 && length <= 64) {
      return;
    } else {
      alert('Password must be at least 10 characters but no more than 64');
    }
  }
}

getPasswordOptions();

// Prompt for character types
const lowercase = confirm('Include lowercase characters?');
const uppercase = confirm('Include uppercase characters?');
const numeric = confirm('Include numeric characters?');
const special = confirm('Include special characters ($@%&*)?');
// function getPasswordOptions(specialC, upper, lower, num) {
//   specialC = confirm("Password should contain a special character?"),
//   upper = confirm("Password should an Upper case character?"),
//   lower = confirm("Password should contain a lower case character?"),
//   num = confirm("Password should contain a numeric character?")
// }
// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  alert("Called this function. Wheeee!!!");
  return "This is a secret password. Whee."

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);