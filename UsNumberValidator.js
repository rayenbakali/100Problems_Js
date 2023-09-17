function telephoneCheck(str) {
  let regExp = /(1\s?)(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]/;
  return regExp.test(str);
}

telephoneCheck("555-555-5555");

console.log(telephoneCheck("555-555-5555"));
