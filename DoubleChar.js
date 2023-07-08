function doubleChar(str) {
  return str
    .split("")
    .map((m) => m.repeat(2))
    .join("");
}

console.log(doubleChar("salem"));
