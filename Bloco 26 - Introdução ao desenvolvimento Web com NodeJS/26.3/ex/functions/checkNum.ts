const isGreatherLessOrEqualZero = (num: number | string) => {
  if (typeof num !== 'number') return 'o valor deve ser um número';

  if (num > 0) return 'positivo';

  if (num < 0) return 'negativo';

  return 'neutro';
};

export default isGreatherLessOrEqualZero;
