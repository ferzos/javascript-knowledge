const inputNumber = 7;

const fiboMap = {}

const calculateFiboAtIndex = (inputNumber) => {
  if (inputNumber < 2) return 1;

  if (inputNumber in fiboMap) return fiboMap[inputNumber];

  const currIndexFiboNumber = calculateFiboAtIndex(inputNumber - 1) + calculateFiboAtIndex(inputNumber - 2)
  fiboMap[inputNumber] = currIndexFiboNumber

  return currIndexFiboNumber
}

console.log(calculateFiboAtIndex(inputNumber))