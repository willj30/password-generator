// Assignment code here

  
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

  const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const special= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "/", ".", "~"];
 


  function randomLower() {
   return lower[Math.floor(Math.random() * lower.length)];
  }
  function randomUpper() {
   return upper[Math.floor(Math.random() * upper.length)];
  }
  
  function randomNumeric() {
    return numeric[Math.floor(Math.random() * numeric.length)];
  }
  function randomSpecial() {
    return special[Math.floor(Math.random() * special.length)];
}

const pwdLength = document.querySelector('#characters').value;

var lowerBox = document.getElementById('lower').checked;

var upperBox = document.getElementById('upper').checked;

var numericBox = document.getElementById('numeric').checked;

var specialBox = document.getElementById('special').checked;



function writePassword() {
  
  let passwordText = '';
  for (let i = 0; i < pwdLength; i++) {
    if(lowerBox && passwordText < pwdLength); {
     randomLower();
      passwordText += passwordText + [randomLower()];
    }
    if(upperBox && passwordText.length < pwdLength); {
      randomUpper();
      passwordText += passwordText + [randomUpper()];
    }
    if(numericBox && passwordText.length < pwdLength); {
      randomNumeric();
      passwordText += passwordText + [randomNumeric()];
    }
   if(specialBox && passwordText.length < pwdLength); {
      randomSpecial();
      passwordText += passwordText + [randomSpecial()];
    }
    return passwordText;
  }
 
  }


 console.log(writePassword())


  // var passwordText = document.querySelector("#password");


// function generatePassword () 




  
//  var password = generatePassword()
//   var passwordText = document.querySelector("#password");
// var characters = document.getElementById("characters");
