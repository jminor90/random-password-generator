// Assignment Code
var generateBtn = document.querySelector("#generate");

let userResponse;

function generatePassword() {
  //prompt user
  let passLength = prompt("Length?")
  if (passLength < 8 || passLength >128) {
    passAlert = alert("Password must be between 8 and 128 characterss")
    console.log("WRONG")
    generatePassword();
  } else {
    passLower = confirm("Would you like to include lower case?")
    passUpper = confirm("Would you like to include upper case?")
    passNumeric = confirm("Would you like to include numerals?")
    console.log(passLower)
    console.log(passUpper)
    console.log(passNumeric)
  }
  //length 8-128
  //lowercase?
  //uppercase?
  //numeric?
  //special characters?
  //validated and at least ONE character type selected
  //password is generated
  //password displayed

  //console.log("yo");
  return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
