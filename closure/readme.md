# Closure

In JavaScript, a closure is a function that has access to variables defined outside of its own scope. This means that the function "closes over" these variables and can access them even after the outer function has returned.

To create a closure, you define a function inside another function and return it. The inner function can access the variables in the outer function's scope, and those variables remain available even after the outer function has finished executing.

It allows you to create functions with persistent state, and is a powerful tool for building modular and reusable code.

```javascript
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
```