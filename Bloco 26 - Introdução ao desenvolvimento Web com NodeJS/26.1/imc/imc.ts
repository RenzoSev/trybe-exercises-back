import readline from 'readline-sync';

const weight = () => readline.questionFloat('Qual o seu peso?');

const height = () => readline.questionFloat('Qual a sua altura?');

const calculateIMC = (w: number, h: number) => w / h ** 2;

const getSituation = (imc: number) => {
  if (imc >= 30) {
    const template = 'Obesidade grau';

    if (imc <= 34.9) return template.concat(' II');

    if (imc <= 39.9) return template.concat(' I');

    return template.concat('s III e IV');
  }

  if (imc >= 25) return 'Acima do peso';

  if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';

  return 'Abaixo do peso';
};

const resultIMC = (imc: number, situation: string) =>
  `Seu IMC é de ${imc}. Sua situação é: ${situation}`;

const runIMC = () => {
  const w = weight();
  const h = height();

  const imc = calculateIMC(w, h);
  const situation = getSituation(imc);

  const result = resultIMC(imc, situation);

  console.log(result);
};

runIMC();

export default runIMC;
