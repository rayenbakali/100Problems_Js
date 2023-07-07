number = 123456;

let string = number.toString();

let strarray = string.split("").map((item) => {
  return parseInt(item);
});

let finalstr = strarray.reverse();

console.log(strarray);

//Sous forme d'une fonct

function NTR(number) {
  return number
    .toString()
    .split("")
    .map((item) => {
      return parseInt(item);
    })
    .reverse();
}

console.log(NTR(157987));
