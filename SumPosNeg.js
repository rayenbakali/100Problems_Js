let Array = [5, 10, -10, 11, 16, -7];
function PosNeg(array) {
  let neg = 0;
  let pos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      pos.push(array[i]);
    } else {
      neg += array[i];
    }
  }
  return [pos.length, neg];
}
console.log(PosNeg(Array));
