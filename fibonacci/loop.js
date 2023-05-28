const inputNumber = 7;

const fiboNumbers = [1,1]

for (let index = 2; index <= inputNumber; index++) {
  const [first, second] = fiboNumbers
  const nextFiboNumber = first + second
  
  // Keep the size constant for memory optimization
  fiboNumbers.push(nextFiboNumber)
  fiboNumbers.splice(0, 1)
}

const [result] = fiboNumbers.splice(-1)
console.log(result)
