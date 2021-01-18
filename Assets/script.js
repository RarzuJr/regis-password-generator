// Assignment Code
var generateBtn = document.querySelector("#generate");
var okay
var validNumber;
var validCharacters;
var lettersUppercase;
var letersLowercase;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var SmallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var UpperLetters = [SmallLetters.map(toUpperCase)];

// Write password to the #password input
function writePassword() {
  gather_character_count()
  gather_character_attribute()
  determine_choices()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//When A clicks on the generate button I ask the user specific questions to help me generate the password.
function generatePassword() {
  okay = parseInt(prompt("How many characters would you like for your password ? Choose between 8 and 128"))
}



function gather_character_count() {
  // I ask the user the questions from the criiterias 
  // 1. ask the user for the length of the pasword 

  var character_count = prompt("Please choose any character length between 8 and 128",);

  if (character_count < 8 || character_count > 128) {
    gather_criteria()
  }
}


function gather_character_attribute() {
  // 2. ask the user if they want to use Uppercase
  //3. ask the user if they want to use numeric
  //4. ask the user if they want to use special charecter

  validmNumber = confirm("Will this contain numbers?");
  validCharacters = confirm("Will this contain special characters?");
  lettersUppercase = confirm("Will this contain Uppercase letters?");
  lettersLowercase = confirm("Will this contain Lowercase letters?");
}

function determine_choices() {

  if (!validCharacters && !validNumber && !lettersUppercase && !lettersLowercase) {
    choices = alert("please click on generate password");
  }

  else if (validCharacters && validmNumber && lettersUppercase) {
    choices = SpecialCharacters.concat(numbers, UpperLetters);
  }
  else if (validCharacters && validmNumber && lettersLowercase) {
    choices = SpecialCharacters.concat(numbers, SmallLetters);
  }
  else if (validCharacters && confirmLowercase && lettersUppercase) {
    choices = SpecialCharacters.concat(SmallLetters, UpperLetters);
  }
  else if (validCharacters && lettersLowercase && lettersUppercase) {
    choices = numbers.concat(SmallLetters, UpperLetters);
  }
  else if (validCharacters && validmNumber) {
    choices = SpecialCharacters.concat(numbers);

  } else if (validCharacters && lettersLowercase) {
    choices = SpecialCharacters.concat(SmallLetters);

  } else if (validCharacters && lettersUppercase) {
    choices = SpecialCharacters.concat(UpperLetters);
  }
  else if (confirmLowercase && validmNumber) {
    choices = SmallLetters.concat(numbers);

  } else if (confirmLowercase && lettersUppercase) {
    choices = SmallLetters.concat(UpperLetters);

  } else if (validmNumber && lettersUppercase) {
    choices = numbers.concat(UpperLetters);
  }
  else if (validCharacters) {
    choices = SpecialCharacters;
  }
  else if (validmNumber) {
    choices = numbers;
  }
  else if (lettersLowercase) {
    choices = SmallLetters;
  }
  else if (lettersUppercase) {
    choices = space.concat(UpperLetters);
  };

}

//When the user answer the question it should validate evevrything they want
// When all the questions are answered then all the password is generated correctly
// When a password is generated it is displayed ont he screen
// `
``
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// ## Mock-Up

// The following image shows the web application's appearance and functionality:


