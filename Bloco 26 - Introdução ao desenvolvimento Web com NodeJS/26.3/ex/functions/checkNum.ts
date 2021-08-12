const isGreatherLessOrEqualZero = (num: number) => {
  if (num > 0) return 'positivo';

  if (num < 0) return 'negativo';

  return 'neutro';
};

export default isGreatherLessOrEqualZero;
