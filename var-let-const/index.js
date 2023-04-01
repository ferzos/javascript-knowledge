var x = 1; // function scope
if (true) {
  var x = 2; // hoisted to function scope
  let y = 3; // block scope
  y = 3.5
  const z = 4; // block scope
  console.log(x); // 2
  console.log(y); // 3.5
  console.log(z); // 4
}

for (let i = 0; i < 10; i++) {
  var insideLoop = i
}

console.log(x); // 2 (because of hoisting)
console.log(insideLoop) // 9 (can access var defined in a foor loop)
console.log(y); // ReferenceError: y is not defined (out of scope)
console.log(z); // ReferenceError: z is not defined (out of scope)
