function getAscendingDescending(number: number): { ascending: number; descending: number } {
  const numberString: string = ('000' + number).slice(-4);
  const digits: number[] = numberString.split('').map(Number);

  const ascending: number = parseInt(digits.sort().join(''), 10);
  const descending: number = parseInt(digits.slice().sort((a, b) => b - a).join(''), 10);

  return { ascending, descending };
}

function kaprekarRoutine(inputNumber: number): number[] {
  const iterations: number[] = [];

  while (inputNumber !== 6174 && iterations.length < 7) {
    const { ascending, descending } = getAscendingDescending(inputNumber);

    const subtractionResult: number = descending - ascending;
    if (inputNumber === 0) {
      console.log(`The number ${inputNumber} cannot be processed as it is an exception to Kaprekar's constant`);
      break;
    }
    iterations.push(subtractionResult);

    inputNumber = subtractionResult;
  }

  return iterations;
}

function displayKaprekarRoutine(userInput: number): void {
  if (userInput < 1000 || userInput > 9999 || isNaN(userInput) || !Number.isInteger(userInput)) {
    console.log('Please enter a valid four-digit number.');
    return;
  }

  const iterations: number[] = kaprekarRoutine(userInput);

  let currentNumber: number = userInput;
  for (let i = 0; i < iterations.length; i++) {
    const { ascending, descending } = getAscendingDescending(currentNumber);

    console.log(`${descending} - ${ascending} = ${iterations[i]}`);
    currentNumber = iterations[i];
  }

  console.log(`Final result: ${iterations[iterations.length - 1]}`);
}

const userInput: number = 5555;

displayKaprekarRoutine(userInput);
