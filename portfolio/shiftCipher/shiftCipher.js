/* Shift Cipher for Codecademy Classes challenges. For the encrypt method I converted based on uppercase and lowercase but realized I didn't need to do that for the challenge so converted all to lowercase for the decrypt part of the lesson. */

class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }

  encrypt(string) {
    //Turn string into array of character codes. 
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      arr.push(string.charCodeAt(i));
    }
    //for each item in array:
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] >= 65 && arr[i] <= 90) { //Check if it is an uppercase letter (65-90)
        //Add shift cipher
        arr[i] += this._shift;
        //If result is > 90, add 6 to number
        if (arr[i] > 90) {
          arr[i] += 6;
        }
      } else if (arr[i] >= 97 && arr[i] <= 122) { //Check if it is a lowercase letter (97-122)
        //Add shift cipher
        arr[i] += this._shift;
        //If result is > 122, subtract 56 from number
        if (arr[i] > 122) {
          arr[i] -= 58;
        }
      }
    }
    //Convert array back to letters. 
    for (let i = 0; i < arr.length; i++) {
      arr[i] = String.fromCharCode(arr[i]);
      arr[i] = arr[i].toUpperCase(); // Uppercase for the test to pass. 
    }
    // Combine letters into a string. 
    return arr.join("");

  }

  decrypt(string) {
    // convert to lowercase. 
    let arr = [];
    let lowerString = string.toLowerCase();
    for (let i = 0; i < lowerString.length; i++) {
      arr.push(lowerString.charCodeAt(i));
    }
    // for each letter
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 97 && arr[i] <= 122) { // check if letter within range (97-122)
    
        // if in range subtract shift cipher
        arr[i] -= this._shift;
        // check if still in range and add 26 to number if less than 97.
        if (arr[i] < 97) {
          arr[i] += 26;
        }
        // else, do nothing. 
      }
    }
    //Convert array back to letters. 
    for (let i = 0; i < arr.length; i++) {
      arr[i] = String.fromCharCode(arr[i]);
    }
    // Combine letters into a string. 
    return arr.join("");
  }
}

const cipher = new ShiftCipher(1);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
console.log(cipher.encrypt('z'));