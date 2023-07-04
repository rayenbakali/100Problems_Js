let test = [1, 7, 20, 30, 11, 6];

function add_or_even(list) {
  let print = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
      print += "even\n";
    } else {
      print += "odd\n";
    }
  }
  return print;
}

console.log(add_or_even(test));
