const readline = require('readline-sync');

export const getRandomNumber = () => Math.round(Math.random() * 10);

export const questionNumberChoice = () => readline.questionInt('Digite um número');

export const getThePrize = (choice: number) => {
  const randomNumber = getRandomNumber();

  const isRightChoice = randomNumber === choice;

  if (isRightChoice)
    return `Parabéns! Você acertou o número.
  Sua resposta: ${choice}.
  Número escolhido: ${randomNumber}`;

  return `Você não acertou o número =(.
  Sua resposta: ${choice}.
  Número escolhido: ${randomNumber}`;
};

export const runPrize = () => {
  const choice = questionNumberChoice();

  const prizeResult = getThePrize(choice);

  console.log(prizeResult);
}

runPrize();