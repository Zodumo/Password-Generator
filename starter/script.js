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
var password = "";


// Function to prompt user for password options
function getPasswordOptions() {
  userInput = {};
  // Validate password length
  while (true) {
    // Prompt for password length
    var newPassword = parseInt(prompt(
      'Enter the length of the password (between 10 and 64 characters):'));

    // Validate password length
    if (newPassword >= 10 && newPassword <= 64 && Number.isInteger(newPassword)) {
      userInput['length'] = newPassword;
     
      //Once password length is confirmed by numer, this loop breaks
      break;

      //if not, the user is asked to enter length again using numeric value
    } else {
      alert('Password must be at least 10 characters but no more than 64. Please enter numerical value');
    }
  }

  //logging the user's input in object
  console.log(Object.values(userInput));

  //while loop prompting user to confirm characters they want included in their password

  while (Object.values(userInput).includes(true) == false) {

    // Prompt for character types
    var lowercase = confirm('Include lowercase characters?');
    userInput['lowercase'] = lowercase;

    var uppercase = confirm('Include uppercase characters?');
    userInput['uppercase'] = uppercase;

    var numeric = confirm('Include numeric characters?');
    userInput['numeric'] = numeric;

    var special = confirm('Include special characters ($@%&*)?');
    userInput['special'] = special;

    // in the case that a user has rejected all character types, the loop starts again
    // and they're prompted to start their options again and to select at least one character type.
    if (Object.values(userInput).includes(true) == false) {
      alert('You need to select at least one character type');
    };

  }

  return userInput;
}



// Function for getting a random element from an array
function getRandom(Newarr) {
  //return item at random selected index out of all indexes in array
  return Newarr[Math.floor(Math.random() * Newarr.length)];

}

//checking the size of the new array (the passowrd)
function checkSizeAndAdd(Newarr, item) {
  Newarr.unshift(item);
  return true

};
// Function to generate password with user input
function generatePassword() {
  var userInput = getPasswordOptions();

  //The user's password will be stored in an empty array
  //In this loop, we are going to check that the generator meets the user's desired length (userInput)
  var maxLength = userInput.length
  password = []
  var i = 0;
  while (password.length < maxLength) {

    //Check the desired password length and character type then keep adding characters until we reach that length 
    if (userInput.uppercase == true && password.length < maxLength) {
      password.push(getRandom(upperCasedCharacters));
      i++

    };
    if (userInput.lowercase == true && password.length < maxLength) {
      password.unshift(getRandom(lowerCasedCharacters));
      i++

    };
    if (userInput.numeric == true && password.length < maxLength) {
      password.unshift(getRandom(numericCharacters));
      i++

    };
    if (userInput.specialChars == true && password.length < maxLength) {
      password.push(getRandom(specialCharacters));
      i++

    };

  }
  return password.join("");
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