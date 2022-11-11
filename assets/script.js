document.querySelector("#generate").addEventListener("click", writePassword);

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "/", ".", "~"];

var checkLength = '';
var checkLower;
var checkUpper;
var checkNumber;
var checkSpecial;

function generatePassword() {
var checkLength = (prompt("How many characters do you need in your password? (Between 8 - 128)"));
while(checkLength <=7 || checkLength >= 129)  {
  alert("Pick a number between 8 and 128, silly!");
  var checkLength = (prompt("How many characters do you need in your password? (Between 8 - 128 Please)"));
}
var checkLower = confirm("Do you need lowercase letters?"); 
var checkUpper = confirm("Do you need UPPERCASE letters?"); 
var checkNumber = confirm("Do you need numbers?"); 
var checkSpecial = confirm("Do you need special characters?"); 
 if (checkLower === false &&
   checkUpper === false &&
   checkNumber === false &&
   checkSpecial === false) {
  alert("You need to choose at LEAST one option!");
  var checkLower = confirm("Do you need lowercase letters?"); 
  var checkUpper = confirm("Do you need UPPERCASE letters?"); 
  var checkNumber = confirm("Do you need numbers?"); 
  var checkSpecial = confirm("Do you need special characters?");
   
   }

var pwdCharacters = [];

if (checkLower) {
pwdCharacters = pwdCharacters.concat(lower)
}
if (checkUpper) {
pwdCharacters = pwdCharacters.concat(upper)
}
if (checkNumber) {
pwdCharacters = pwdCharacters.concat(numeric)
}
if (checkSpecial) {
pwdCharacters = pwdCharacters.concat(special)
}

var randomPwd = '';

for (var i = 0; i < checkLength; i++) {
randomPwd = randomPwd + pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)];
}
return randomPwd;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}