function padNumberWithZeros(number) {
  return ('000' + number).slice(-4);
}
function convertStringToDigits(numberString) {
  return numberString.split('').map(Number);
}
function getAscendingOrder(number) {
  const paddedNumber = padNumberWithZeros(number);
  const digits = convertStringToDigits(paddedNumber);
  return parseInt(digits.sort().join(''), 10);
}
function getDescendingOrder(number) {
  const paddedNumber = padNumberWithZeros(number);
  const digits = convertStringToDigits(paddedNumber);
  return parseInt(digits.slice().sort((a, b) => b - a).join(''), 10);
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
  let difference = inputNumber;
  let index=0;
  while (difference !== 6174 && iterations.length < 7) {
    const ascending = getAscendingOrder(difference);
    const descending = getDescendingOrder(difference);
    const subtractionResult = descending - ascending;
    iterations.push(subtractionResult);
    console.log(`${descending} - ${ascending} = ${iterations[index]}`);
      index++;
    difference = subtractionResult;
  }
    console.log(`Final result: ${iterations[iterations.length - 1]}`);
  return iterations;
}

function displayInvalidInputMessage() {
  console.log('Please enter a valid four-digit number with at least two different digits.');
}

function main(userInput) {
  if (isValidFourDigitNumber(userInput)) {
    const iterations = performKaprekarRoutine(userInput);
  } else {
    displayInvalidInputMessage();
  }
}

const userInput = 7776;
main(userInput);
