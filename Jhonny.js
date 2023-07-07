function greet(name) {
  if (name === "Jhonny") return "Hello, my love";

  return "Hello " + name + "!";
}

console.log(greet("Jhonny"));

//Arrow Functions

function greet2(name) {
  return name !== "Jhonny" ? "Hello " + name + "!" : "Hello, my love";
}
console.log(greet2("Jhonny"));
