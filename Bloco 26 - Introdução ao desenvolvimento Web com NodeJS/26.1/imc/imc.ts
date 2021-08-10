const readline = require('readline-sync');

export const weight = () => readline.questionFloat('Qual o seu peso?');

export const height = () => readline.questionFloat('Qual a sua altura?');

export const calculateIMC = (w: number, h: number) => w / h ** 2;

export const getSituation = (imc: number) => {
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

export const resultIMC = (imc: number, situation: string) =>
  `Seu IMC é de ${imc}. Sua situação é: ${situation}`;
