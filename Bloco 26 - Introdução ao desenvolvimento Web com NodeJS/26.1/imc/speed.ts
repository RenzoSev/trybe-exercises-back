const readline = require('readline-sync');

export const calculateAverageSpeed = (distance: number, time: number) =>
  distance / time;

export const questionDistance = () =>
  readline.questionInt('Qual a distância em metros?');

export const questionTime = () =>
  readline.questionInt('Qual o tempo em segundos?');

export const runSpeed = () => {
  const distance = questionDistance();

  const time = questionTime();

  const averageSpeed = calculateAverageSpeed(distance, time);

  console.log(averageSpeed);
};

runSpeed();
