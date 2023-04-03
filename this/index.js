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

// =======================================================
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
