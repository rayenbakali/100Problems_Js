function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i]);
    if (index == -1) {
      newString += str[i];
    } else {
      let newIndex = (index + 13) % 26;
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
