function outer() {
  const name = "John";
  
  function inner() {
    console.log("Hello, " + name + "!");
  }
  
  return inner;
}

const greet = outer();
/**
 * 1. typeof `greet` is a `function`
 * 2. We still have access to `name` even though `outer` has been finished executing
 * 3. Therefore, the log will be "Hello, John!"
 */
greet(); // Output: Hello, John!
