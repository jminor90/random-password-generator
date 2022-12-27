// Assignment Code
const generateBtn = document.querySelector("#generate");
const numerals = [0,1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialChar = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"]




function generatePassword() {
  let password = ''
  let availCharmander = []
  //prompt user
  let passLength = prompt("Length?")
  if (passLength < 8 || passLength >128) { //find a way to check if user inputs a string here...
    passAlert = alert("Password must be between 8 and 128 characterss")
    console.log("WRONG")
    generatePassword();
  } else {

    //length 8-128
    //lowercase?
    //uppercase?
    //numeric?
    //special characters?
    passUpper = confirm("Would you like to include upper case?")
    passLower = confirm("Would you like to include lower case?")
    passNumeric = confirm("Would you like to include numerals?")
    passSpecial = confirm("Would you like to include special characters?")




  }
  //confirming userinput to console
  console.log("passLength is "+passLength)
  console.log("passUpper is " +passUpper)
  console.log("passLower is " +passLower)
  console.log("passNumeric is "+passNumeric)
  console.log("passSpecial is "+passSpecial)
  
  //Upper = True, Lower = True, Numeral = True, Special = True - TTTT - ALL TRUE
  if (passUpper === true && passLower === true && passNumeric === true && passSpecial === true) {
    availCharmander = upperCase.concat(lowerCase, numerals, specialChar)
    
    // Upper = True, Lower = True, Numeral = True, Special = False -  TTTF
    }else if (passUpper === true && passLower === true && passNumeric === true && passSpecial === false) {
      availCharmander = upperCase.concat(lowerCase, numerals)

      // Upper = True, Lower = True, Numeral = False, Special = False - TTFF
    }else if (passUpper === true && passLower === true && passNumeric === false && passSpecial === false) {
      availCharmander = upperCase.concat(lowerCase)

      // Upper = True, Lower = False, Numeral = False, Special = False -  TFFF - JUST UPPERCASE
    }else if (passUpper === true && passLower === false && passNumeric === false && passSpecial === false) {
      availCharmander = upperCase

      // Upper = False, Lower = True, Numeral = True, Special = True -  FTTT
    }else if (passUpper === false && passLower === true && passNumeric === true && passSpecial === true) {
      availCharmander = lowerCase.concat(numerals, specialChar)

      // Upper = False, Lower = False, Numeral = True, Special = True - FFTT
    }else if (passUpper === false && passLower === false && passNumeric === true && passSpecial === true) {
      availCharmander = numerals.concat(specialChar)

      // Upper = False, Lower = False, Numeral = False, Special = True - FFFT
    }else if (passUpper === false && passLower === false && passNumeric === false && passSpecial === true) {
      availCharmander = specialChar

      // Upper = True, Lower = False, Numeral = True, Special = True - TFTT
    }else if (passUpper === true && passLower === false && passNumeric === true && passSpecial === true) {
      availCharmander = upperCase.concat(numerals, specialChar)

      // Upper = True, Lower = False, Numeral = False, Special = True - TFFT
    }else if (passUpper === true && passLower === false && passNumeric === false && passSpecial === true) {
      availCharmander = upperCase.concat(specialChar)

      // Upper = True, Lower = False, Numeral = True, Special = False - TFTF
    }else if (passUpper === true && passLower === false && passNumeric === true && passSpecial === false) {
      availCharmander = upperCase.concat(numerals)

      // Upper = False, Lower = True, Numeric = True, Special = False - FTTF
    }else if (passUpper === false && passLower === true && passNumeric === true && passSpecial === false) {
      availCharmander = lowerCase.concat(numerals)

      // Upper = False, Lower = True, Numeric = False, Special = True - FTFT
    }else if (passUpper === false && passLower === true && passNumeric === true && passSpecial === false) {
      availCharmander = lowerCase.concat(specialChar)

      // Upper = False, Lower = True, Numeric = False, Special = False - FTFF - JUST LOWERCASE
    }else if (passUpper === false && passLower === true && passNumeric === false && passSpecial === false) {
      availCharmander = lowerCase

      // Upper = False, Lower = False, Numeric = True, Special = False - FFTF - JUST NUMERALS
    }else if (passUpper === false && passLower === false && passNumeric === true && passSpecial ===false) {
      availCharmander = numerals

      // Upper = False, Lower = False, Numeric = False, Special = True - FFFT - JUST SPECIAL CHAR
    } else if (passUpper === false && passLower === false && passNumeric === false && passSpecial === true) {
      availCharmander = specialChar

      //Upper = False, Lower = False, Numeric = False, Special = False - FFFF - None select throw an alert
    }else {

      //validated and at least ONE character type selected
      password = ''
      availCharmander = []
      passAlert = alert("You must select at least one criteria.")
      console.log("All false")
      return;
    }

  //password is generated using a for loop.
  for (i=0; i < passLength; i += 1) {
    const randomIndex = Math.floor(Math.random() *availCharmander.length); //Math Random chooses random numbers at the length of the availCharmander array length
    password += availCharmander[randomIndex]; //password strung together using randomIndex number for characters in AvailableCharmader

  } console.log(password) //Console log the password jsut to confirm


  //password displayed

  return password;
};


// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  
  let passwordText = document.querySelector("#password");
  
  /*
  if (password = undefined) {
    passwordText.value = "Password is not Defined"
  } else {
  passwordText.value = password;
  }
  */
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
