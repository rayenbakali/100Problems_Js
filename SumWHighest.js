let array = [6, 2, 1, 8, 10];
let empty = [];

//First meth
function SumWHL(arr) {
  let sum = 0;
  let max = 0;
  let min = Infinity;
  if (arr.length == 0) return 0;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      } else if (min > arr[i]) {
        min = arr[i];
      }
      sum += arr[i];
    }

    return sum - (max + min);
  }
}

console.log(SumWHL(array));

//Second Meth

function SumWh(array) {
  if (array == 0) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}

console.log(SumWh(array));
