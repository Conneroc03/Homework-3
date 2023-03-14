
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  generatePassword({
    passwordLength: passwordLength,
  })
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// this is where the criteria for the password is set, the length of the password, and the type of characters
var passwordLength = prompt(
  "How many characters would you like your password to contain?");
var passwordLength = parseInt(passwordLength);
var passwordUpperCase = confirm("Click OK to confirm including uppercase characters.");
var passwordLowerCase = confirm("Click OK to confirm including lowercase characters.");
var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
var passwordSpecial = confirm("Click OK to confirm including special characters.");

// this is the criteria for the password, examples are upercase, lowercase, numeric, and special characters
var password = "";
var passwordCharacters= "";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var passwordCharacters = lowercaseCharacters + uppercaseCharacters + numericCharacters + specialCharacters;

// this is where the random aspect of the password is generated
for (var i = 0; i < passwordLength; i++) {
  password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
}
  if (passwordUpperCase) {
    passwordCharacters += uppercaseCharacters;

  }


 document.getElementById("password").value = password;




















generateBtn.addEventListener("click", writePassword);
