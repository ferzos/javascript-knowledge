# this

The `this` keyword is a special keyword that refers to the object that is currently executing the current function. The value of this changes depending on how and where the function is called.

```javascript
const myObject = {
  name: 'John',
  sayName() {
    /**
     * 1. sayName is being called by `myObject` in the following line
     * 2. Therefore, this point (or refers) to the `myObject`
     * 3. Since `myObject` has `name` properties, it will log "My name is John"
     */
    console.log(`My name is ${this.name}`);
  }
}

myObject.sayName(); // Output: My name is John
```

However, when a function is called without an object context, this refers to the global object (window in a web browser or global in Node.js), or undefined in strict mode. For example:

```javascript
function sayName() {
  /**
   * 1. sayName is not being called by an object in the following line
   * 1.1. You can say that it is being "called", but by the global object depending on the enviroment where it's called: 
   *      - web: Window
   *      - nodejs: Global
   */
  console.log(`My name is ${this.name}`);
}

sayName(); // 2. Output: "My name is undefined" (in non-strict mode)
globalThis.name = 'ferzos'
sayName(); // 2.2. After assignment: "My name is ferzos"
```