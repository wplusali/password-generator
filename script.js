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

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

  var hasSpecialCharacters = confirm("Click OK to include special characters.");
  var hasNumericCharacters = confirm("Click OK to include numeric characters.");
  var hasLowerCasedCharacters = confirm("Click OK to include lowercase characters.");
  var hasUpperCasedCharacters = confirm("Click OK to include uppercase characters.");

  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
    alert("Must select at least one character type");
    return null;
  }

  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return '';

  var possibleCharacters = [];
  if (options.hasSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharacters);
  if (options.hasNumericCharacters) possibleCharacters = possibleCharacters.concat(numericCharacters);
  if (options.hasLowerCasedCharacters) possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  if (options.hasUpperCasedCharacters) possibleCharacters = possibleCharacters.concat(upperCasedCharacters);

  var generatedPassword = "";
  for (var i = 0; i < options.length; i++) {
    generatedPassword += getRandom(possibleCharacters);
  }

  return generatedPassword;
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
