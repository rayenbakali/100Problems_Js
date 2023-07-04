//Sum of positive numbers
let sum = 0;
let list = [1, -5, 10, -6, 7];

//First Meth
function sumPos(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//Second Meth
function SumPos2(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current);
}

console.log(sumPos(list));
console.log(SumPos2(list));
