const sum = (num1: number, num2: number) => num1 + num2;

const sub = (num1: number, num2: number) => num1 - num2;

const mul = (num1: number, num2: number) => num1 * num2;

const div = (num1: number, num2: number) => num1 / num2;

const getOperation = (operation: string, num1: number, num2: number) => {
  const operators = {
    soma: sum,
    subtracao: sub,
    divisao: mul,
    multiplicacao: div,
  };

  const operator = operators[operation as keyof typeof operators];

  if (!operator) return 'error';

  return operator(num1, num2);
};

export default getOperation;
