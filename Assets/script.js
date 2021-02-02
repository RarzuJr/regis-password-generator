
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var SmallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


funtion generateQuestions() {

  var length = passwordLength(
    prompt("How many charechters between 8-129 do you want your passsowrd to be ?");
  );

  if (isNaN(length) === true) {
    alert("please provide password leagth");
    return;
  }
  if (length < 8) {
    alert('password must be a minimum of 8 charecters');
    return;
  }
  if (length > 128) {
    alert('password must be a maximum of 128 charecters');
    return;
  }
  var SpecialCharacters = confirm(
    'click ok to add special charecter'
  );
  var numbers = confirm(
    'click ok to add numbers'
  );
  var UpperLetters = confirm(
    'click ok to add capital letters'
  );
  var SmallLetters = confirm(
    'click ok to add lowercase letters'
  );

  if (
    SpecialCharacters === false &&,
    numbers === false &&,
    UpperLetters === false &&,
    SmallLetters === false &&,
) {
    alert("please choose a charecter tpe")
    return;
  };
  var allPossibleCharecters = {
    length: length,
    SpecialCharacters: SpecialCharacters,
    numbers: numbers,
    SmallLetters: SmallLetters,
  };
  return allPossibleCharecters;
}

function randomGen(array) {
  var randomCharecters = Math.floor(Math.random() * array.length);
  var randomPassword = arr[randomCharecters];

  return randomPassword;
}
funtion generatePassword() {
  var potentOptions = generateQuestions()
  var results = [];
  var potentialCharacters = []
  var pickedCharecters = []

}
if (potentOptions.specialCharacters) {
  potentialCharacters = potentialCharacters.concat(specialCharacters);
  pickedCharecters.push(randomGen(specialCharacters));
}


if (potentOptions.numbers) {
  potentialCharacters = potentialCharacters.concat(numbers);
  pickedCharecters.push(randomGen(numbers));
}

if (potentOptions.hasLowerCasedCharacters) {
  potentialCharacters = potentialCharacters.concat(SmallLetters);
  pickedCharecters.push(randomGen(SmallLetters));
}

if (potentOptions.hasUpperCasedCharacters) {
  potentialCharacters = potentialCharacters.concat(UpperLetters);
  pickedCharecters.push(randomGen(UpperLetters));
}
for (var i = 0; i < pickedCharecters.length; i++) {
  result[i] = pickedCharecters[i];
}
return result.join("");
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//* When I click on the "Password Geberator Button" an alert comes up to 
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
//*When asked about the length of the charecters it can be more than 8 less than 128


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