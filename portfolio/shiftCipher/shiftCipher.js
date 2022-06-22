class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }

  encrypt() {
    
  }

  decrypt() {

  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'