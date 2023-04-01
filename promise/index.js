const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject(new Error('Number is less than 0.5'));
    }
  }, 1000);
});

// pending
console.log(promise)

promise.then((result) => {
  console.log(`Promise resolved with result: ${result}`);
}).catch((error) => {
  console.log(`Promise rejected with error: ${error.message}`);
});

try {
  const value = await promise;
  // value is more than 0.5
  console.log(value)
} catch (error) {
  console.log(error)
}