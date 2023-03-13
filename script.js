var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (let i = 1; i < passwordLength; i++) {
    var char = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    var password = "";
    var passwordCharacters = "";
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    passwordCharacters += randomLowercase;
  }
    class generateBtn { onclick = "writePassword()" }




  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = prompt("How many characters would you like your password to contain?");
var passwordLength = parseInt(passwordLength);
var passwordLowercase = confirm("Click OK to confirm including lowercase characters.");
var passwordUppercase = confirm("Click OK to confirm including uppercase characters.");
var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
var passwordSpecial = confirm("Click OK to confirm including special characters.");
var password = "";
//var passwordCharacters = "";
//var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
///var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var numericCharacters = "0123456789";
//var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
//var randomLowercase = lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
//var randomUppercase = uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
//var randomNumeric = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
//var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

