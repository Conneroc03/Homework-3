var generateBtn = document.querySelector("#generate");

function GeneratePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
  }
  if (passwordLength > 128) {
    alert("Password must be less than 128 characters");
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Password must be between 8 and 128 characters");
  }
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
    alert("You must select at least one character type");
  }
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
    class generatePassword {
      constructor(passwordLength, passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial) {
        this.passwordLength = passwordLength;
        this.passwordLowercase = passwordLowercase;
        this.passwordUppercase = passwordUppercase;
        this.passwordNumeric = passwordNumeric;
        this.passwordSpecial = passwordSpecial;
      }
    }




  passwordText.value = password;

}

generateBtn.addEventListener("click", GeneratePassword);
var passwordLength = prompt("How many characters would you like your password to contain?");
var passwordLength = parseInt(passwordLength);
var passwordLowercase = confirm("Click OK to confirm including lowercase characters.");
var passwordUppercase = confirm("Click OK to confirm including uppercase characters.");
var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
var passwordSpecial = confirm("Click OK to confirm including special characters.");