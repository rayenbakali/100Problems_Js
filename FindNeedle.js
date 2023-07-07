let haystack = ["hay", "junk", "salem", "needle", "yo"];
function FindNeedle(array) {
  index = 0;
  for (i in array) {
    if (array[i] === "needle") {
      index = i;
      return "Found the needle at position " + i;
    }
  }
}

console.log(FindNeedle(haystack));
