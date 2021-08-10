import readline from 'readline-sync';

const questionNumber = () => readline.questionInt('Digite um número');

const createArrayFibonacci = (number: number) =>
  Array.from(Array(number + 1).keys());

const getFibonacci = (number: number) => {
  const arrayFibonacci = createArrayFibonacci(number);

  const fibonacci = arrayFibonacci.reduce((acc, cur, index) => {
    if ([0, 1].includes(cur)) return acc.concat(cur);

    const firstNum = acc[index - 1] + acc[index - 2];
    const updatedArray = acc.concat(firstNum);

    return updatedArray;
  }, [] as number[]);

  return fibonacci;
};

const runFibonacci = () => {
  const number = questionNumber();

  const fibonacci = getFibonacci(number);

  console.log(`
  O resultado do Fibonnaci é 
  ${fibonacci}
  `);
};

runFibonacci();

export default runFibonacci;
