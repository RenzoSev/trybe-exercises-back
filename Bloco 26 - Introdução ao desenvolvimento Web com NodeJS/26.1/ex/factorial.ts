import readline from 'readline-sync';

const questionNumber = () => readline.questionInt('Digite um número');

const createAnArrayWith1UntilN = (number: number) =>
  Array.from({ length: number }, (_, i) => i + 1);

const getFactorial = (number: number) => {
  const arrayNums = createAnArrayWith1UntilN(number);

  const factorial = arrayNums.reduce((acc, cur) => acc * cur);

  return factorial;
};

const runFactorial = () => {
  const number = questionNumber();
  const factorial = getFactorial(number);
  console.log(`O fatorial de ${number} é ${factorial}`);
};

runFactorial();

export default runFactorial;
