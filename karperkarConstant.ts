function getAscendingDescendingNumbers(number) {
  const numberString = ('000' + number).slice(-4);
  const digits = numberString.split('').map(Number);
  const ascending = parseInt(digits.sort().join(''), 10);
  const descending = parseInt(digits.slice().sort((a, b) => b - a).join(''), 10);
  return { ascending, descending };
}

function isValidFourDigitNumber(number) {
  const numberString = number.toString();
  return (
    numberString.length === 4 &&
    new Set(numberString.split('')).size >= 2 &&
    !isNaN(number) &&
    Number.isInteger(number)
  );
}

function performKaprekarRoutine(inputNumber) {
  const iterations = [];
  while (inputNumber !== 6174 && iterations.length < 7) {
    const { ascending, descending } = getAscendingDescendingNumbers(inputNumber);
    const subtractionResult = descending - ascending;
    if (inputNumber === 0) {
      console.log(`The number ${inputNumber} cannot be processed as it is an exception to Kaprekar's constant`);
      break;
    }
    iterations.push(subtractionResult);
    inputNumber = subtractionResult;
  }
  return iterations;
}

function displayKaprekarRoutineSteps(iterations, userInput) {
  let currentNumber = userInput;
  for (let i = 0; i < iterations.length; i++) {
    const { ascending, descending } = getAscendingDescendingNumbers(currentNumber);
    console.log(`${descending} - ${ascending} = ${iterations[i]}`);
    currentNumber = iterations[i];
  }
  console.log(`Final result: ${iterations[iterations.length - 1]}`);
}

function displayInvalidInputMessage() {
  console.log('Please enter a valid four-digit number with at least two different digits.');
}

function main(userInput) {
  if (isValidFourDigitNumber(userInput)) {
    const iterations = performKaprekarRoutine(userInput);
    displayKaprekarRoutineSteps(iterations, userInput);
  } else {
    displayInvalidInputMessage();
  }
}

const userInput = 7777;
main(userInput);
