# Arrow Function

## Difference with regular function expression

### 1. Syntactically differ

- Regular function uses `function` whereas arrow function uses `let` or `const`

```javascript
function regular function() { ... }
const arrow = () => { ... }
```

- Regular function only have `block body` format whereas arrow function has a `concise` format

```javascript
const add = (a,b) => a + b
const makeObject = () => ({ id: 'id', value: 0 })
```

### 2. No bindings

Don't have their own bindings to `this`, `arguments`, or `super`. Arrow functions establish `this` based on the scope the arrow function is defined within

```javascript
const obj = {
  i: 10,
  b: () => {
    /**
     * 1. We first expect that `this` would refer to `obj` cause of `obj.b()`
     * 2. But since arrow function doesn't have their own bindings to `this`
     * 3. `this` fallback to the global object
     */
    console.log(this.i, this)
  },
  c() {
    console.log(this.i, this);
  },
};

// logs undefined, Window { /* … */ } (or the global object)
obj.b(); 

// logs 10, Object { /* … */ }
obj.c(); 
```

```javascript
class C {
  a = 1;
  autoBoundMethod = () => {
    /**
     * 1. Because a `class` body has a `this` context
     * 2. `this` refers to the class itself
     */
    console.log(this);
    console.log(this.a)
  };
}

const c = new C();
const { autoBoundMethod } = c;
// If it were a normal method, it should be undefined in this case
autoBoundMethod(); 
```
```javascript
const myMethod = () => {
  /**
   * 1. We expect `this` to refer to `myObject`
   * 2. That is not the case cause arrow functions establish this based on the scope the arrow function is defined within
   * 3. In this case the globalObject of `index.js` file (typeof globalThis)
   */
  console.log(this);
}
const myObject = { id: '1', value: 0 };
myMethod.call(myObject);
myMethod.apply(myObject);
const myMethodBound = myMethod.bind(myObject);
myMethodBound();
```

```javascript
const arguments = ['arg1', 'arg2', 'arg3'];

function foo(d, e, f) {
  const [a, b, c] = arguments
  console.log({ a, b, c })
}
foo(1, 'a');

const bar = (d, e, f) => {
  const [a, b, c] = arguments;
  /**
   * 1. We expect a tobe d, b to be e, and c to be f
   * 2. But since arrow function doesn't have bindings to arguments
   * 3. arguments above reger to the global arguments
   */
  console.log({ a, b, c })
}
bar(2, 'b');
```

### 3. Cannot be used as generators

The yield keyword cannot be used in an arrow function's body