// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  generatePassword({
    passwordLength: passwordLength,
  })
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var passwordLength = prompt(
  "How many characters would you like your password to contain?");
var passwordLength = parseInt(passwordLength);
var passwordUpperCase = confirm("Click OK to confirm including uppercase characters.");
var passwordLowerCase = confirm("Click OK to confirm including lowercase characters.");
var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
var passwordSpecial = confirm("Click OK to confirm including special characters.");


var password = "";
var passwordCharacters= "";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var passwordCharacters = lowercaseCharacters + uppercaseCharacters + numericCharacters + specialCharacters;

for (var i = 0; i < passwordLength; i++) {
  password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
}
  if (passwordUpperCase) {
    passwordCharacters += uppercaseCharacters;

  }


 document.getElementById("password").value = password;




















generateBtn.addEventListener("click", writePassword);
