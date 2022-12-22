// Assignment Code
var generateBtn = document.querySelector("#generate");
const numerals = [0,1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



let userResponse;
let availCharmander;
let password = ''

function generatePassword() {

  //prompt user
  let passLength = prompt("Length?")
  if (passLength < 8 || passLength >128) {
    passAlert = alert("Password must be between 8 and 128 characterss")
    console.log("WRONG")

  } else {
    passNumeric = confirm("Would you like to include numerals?")
    //passLower = confirm("Would you like to include lower case?")
    //passUpper = confirm("Would you like to include upper case?")
    

    //console.log(passLower)
    //console.log(passUpper)



  }
  console.log(passLength)
  console.log(passNumeric)
  
  if (passNumeric === true) {
    availCharmander = numerals
  } else
  availCharmander = upperCase



  for (i=0; i < passLength; i += 1) {
    const randomIndex = Math.floor(Math.random() *passLength.length)
    password += availCharmander[randomIndex];

  } console.log(password)


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
