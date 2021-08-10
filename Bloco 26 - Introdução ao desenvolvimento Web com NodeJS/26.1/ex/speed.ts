import readline from 'readline-sync';

const calculateAverageSpeed = (distance: number, time: number) =>
  distance / time;

const questionDistance = () =>
  readline.questionInt('Qual a distância em metros?');

const questionTime = () => readline.questionInt('Qual o tempo em segundos?');

const runSpeed = () => {
  const distance = questionDistance();

  const time = questionTime();

  const averageSpeed = calculateAverageSpeed(distance, time);

  console.log(averageSpeed);
};

runSpeed();

export default runSpeed;
