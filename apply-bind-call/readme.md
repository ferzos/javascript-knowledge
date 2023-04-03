# `apply`, `bind`, `call`

`apply()`, `bind()`, and `call()` are methods that can be used to control the invocation context of a function. They are used to bind a specific value to the this keyword within a function and also to pass arguments to the function.

## `call()`

This method invokes the function immediately and allows you to pass arguments one by one. The first argument is the value of this in the function, and subsequent arguments are the arguments passed to the function.

```javascript
function greet(lastname) {
  console.log("Hello, " + this.name + ' ' + lastname);
}

const person = { name: "John" };
/**
 * 1. `greet` is invoked using `call`
 * 2. `this` will bind to `person` object
 * 3. The arguments for `greet` would be `Doe`
 */
greet.call(person, 'Doe'); // Output: Hello, John Anon Doe
```

## `apply()`

This method allows you to pass an array of arguments instead of passing them one by one. 

```javascript
function greet(lastname, middlename) {
  console.log("Hello, " + this.name + ' ' + middlename + ' ' + lastname);
}

const person = { name: "John" };
/**
 * 1. `greet` is invoked using `apply`
 * 2. `this` will bind to `person` object
 * 3. lastname would be 'Doe', and middlename would be 'Anon'
 */
greet.apply(person, ['Doe', 'Anon']); // Output: Hello, John Anon Doe
```

## `bind()`

This method creates a new function with the same body as the original function, but with a bound this value and possibly some initial arguments. It does not invoke the function immediately. Instead, it returns a new function that can be called later.

```javascript
function greet(lastname, middlename) {
  console.log("Hello, " + this.name + ' ' + middlename + ' ' + lastname);
}

const person = { name: "John" };
// Bind the `person` to `greet` and create `greetPerson`
const greetPerson = greet.bind(person);
/**
 * 1. `greetPerson` is created using `bind`
 * 2. `this` will bind to `person` object in the scope of `greetPerson`
 * 3. lastname would be 'Doe', and middlename would be 'Anon'
 */
greetPerson('Doe', 'Anon'); // Output: Hello, John Anon Doe
/**
 * 1. You can't bind a function that is already binded
 * 2. It will not return an error
 */
greetPerson.bind({ name: 'Another John' });
/**
 * 1. Since greetPerson is already binded with the `person` object
 * 2. `this` would still be refer to `person`, even though `greetPerson` is invoked with `bind`
 */
greetPerson(); // Output: Hello, John undefined undefined
globalThis.name = 'Another John';
greet('Another Doe', 'Another Anon') // Output: Hello, Another John Another Anon Another Doe
```

In summary, `call()` and `apply()` allow you to invoke a function immediately with a specific this context and arguments, while `bind()` allows you to create a new function with a specific this context that can be invoked later.