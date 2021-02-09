var numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SpecialCharactersList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var LowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generateQuestions() {

  var passwordLength = parseInt(
    prompt("How many charechters between 8-129 do you want your passsowrd to be ?")
  )

  if (isNaN(passwordLength) === true) {
    alert("Please provide a password length.");
    return;
  }

  if (passwordLength < 8) {
    alert('Password must be a minimum of 8 characters.');
    return;
  }

  if (passwordLength > 128) {
    alert('Password must be a maximum of 128 characters.');
    return;
  }

  var useSpecialCharacters = confirm(
    'Click OK to add special charecter.'
  );

  var useNumbers = confirm(
    'Click OK to add numbers.'
  );

  var useUpperLetters = confirm(
    'Click OK to add capital letters.'
  );

  var useSmallLetters = confirm(
    'Click OK to add lowercase letters.'
  );

  if (
    useSpecialCharacters === false &&
    useNumbers === false &&
    useUpperLetters === false &&
    useSmallLetters === false
) {
    alert("Please select one or more character types.")
    return;
  };

  var allPossibleCharacters = {
    passwordLength: passwordLength,
    special: null,
    numbers: null,
    upper: null,
    lower: null
  }

  if (useSpecialCharacters) {
    allPossibleCharacters.special = SpecialCharactersList
  }
  if (useNumbers) {
    allPossibleCharacters.numbers = numbersList
  }
  if (useUpperLetters) {
    allPossibleCharacters.upper = UpperCaseList
  }
  if (useSmallLetters) {
    allPossibleCharacters.lower = LowerCaseList
  }

  return allPossibleCharacters;
}

function randomGen(characters) {
  var characterIndex = Math.floor(Math.random() * characters.length);
  var randomCharacter = characters[characterIndex];

  return randomCharacter;
}

function generatePassword() {
  var password = ""
  var options = generateQuestions()

  for (let i = 0; i < options.passwordLength; i++) {
    var randomCharacters = []

    if (options.special) {
      randomCharacters.push(randomGen(options.special))
    }
    
    if (options.numbers) {
      randomCharacters.push(randomGen(options.numbers))
    }
    
    if (options.upper) {
      randomCharacters.push(randomGen(options.upper))
    }
  
    if (options.lower) {
      randomCharacters.push(randomGen(options.lower))
    }

    password += randomCharacters[Math.floor(Math.random() * randomCharacters.length)]
  }

  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  var cardTitle = document.querySelector('#card-header-title');
  cardTitle.innerHTML = "Your new password"
}

function cleanPassword() {
  var passwordText = document.querySelector('#password');
  passwordText.value = "";
}

cleanPassword()
document.querySelector('#generate').addEventListener('click', writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//* When I click on the "Password Geberator Button"an alert comes up to 
//ask a series of questions
// var password = {
// document.getElementById("myBtngenerate").addEventListener("click", password);


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//*Depending on the answers to the question, 
//determin what criteria to use in the passowrd
//==>
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//*When asked about the length of the characters it can be more than 8 less than 128


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
//*When asked about the other stuff the password will pull from that criteria
//==>

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//Passsword should have at least one of the charaters approved.

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
//*When all props are answer the password is displayed in the  generator


// THEN the password is either displayed in an alert or written to the page

// ## Mock-Up

// The following image shows the web application's appearance and functionality: