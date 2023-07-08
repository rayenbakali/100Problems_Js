function doubleChar(str) {
  return str
    .split("")
    .map((m) => m.repeat(2))
    .join(""n);
}

console.log(doubleChar("salem"));
