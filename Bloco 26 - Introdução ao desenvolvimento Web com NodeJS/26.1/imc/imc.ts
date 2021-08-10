const readline = require('readline-sync');

export const weight = () => readline.questionFloat('Qual o seu peso?');
export const height = () => readline.questionFloat('Qual a sua altura?');
export const calculateIMC = (w: number, h: number) => w / h ** 2;
