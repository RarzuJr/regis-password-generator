// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//When A clicks on the generate button I ask the user specific questions to help me generate the password.


// I ask the user the questions from the criiterias 

// 1. ask the user for the length of the pasword 
// 2. ask the user if they want to use Uppercase
//3. ask the user if they want to use numeric
//4. ask the user if they want to use special charecter


// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// ## Mock-Up

// The following image shows the web application's appearance and functionality: