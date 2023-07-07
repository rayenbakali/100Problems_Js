let Sheep = [true, false, false, true, false, true, false];
function CountingSheep(array) {
  let Nsheep = 0;
  for (i = 0; i < array.length; i++)
    if (array[i] == true) {
      Nsheep += 1;
    }
  return Nsheep;
}
console.log(CountingSheep(Sheep));

//Second Meth

function CountingSheep2(array) {
  let Nsheep = 0;

  for (i in array) {
    if (array[i] == true) Nsheep += 1;
  }
  return Nsheep;
}

console.log(CountingSheep2(Sheep));

//Third Meth

function CountingSheep3(array) {
  let Nsheep = 0;
  array.map((m) => {
    m === true ? Nsheep++ : 0;
  });
}

console.log(CountingSheep(Sheep));
