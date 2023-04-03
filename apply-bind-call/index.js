function greet(lastname, middlename) {
  console.log("Hello, " + this.name + ' ' + middlename + ' ' + lastname);
}

const person = { name: "John" };
/**
 * 1. `greet` is invoked using `call`
 * 2. `this` will bind to `person` object
 * 3. The arguments for `greet` would be `Doe`
 */
greet.call(person, 'Doe', 'Anon'); // Output: Hello, John Anon Doe
/**
 * 1. `greet` is invoked using `apply`
 * 2. `this` will bind to `person` object
 * 3. lastname would be 'Doe', and middlename would be 'Anon'
 */
greet.apply(person, ['Doe', 'Anon']); // Output: Hello, John Anon Doe
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