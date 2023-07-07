//First meth
function repeatstr(string, n) {
  let str = "";
  for (i = 0; i < n; i++) {
    str += string + "\n";
  }
  return str;
}

console.log(repeatstr("salem", 5));

//Second

function repeatstr2(string, n) {
  return (str = string.repeat(n));
}

console.log(repeatstr2("salem" + "\n", 2));
