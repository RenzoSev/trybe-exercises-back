import { expect } from 'chai';
import isGreatherLessOrEqualZero from '../functions/checkNum';

describe('Quando o número for maior que 0', () => {
  it('retorna "positivo"', () => {
    const result = isGreatherLessOrEqualZero(1);

    expect(result).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
  it('retorna "negativo"', () => {
    const result = isGreatherLessOrEqualZero(-1);

    expect(result).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
  it('retorna "neutro"', () => {
    const result = isGreatherLessOrEqualZero(0);

    expect(result).to.be.equals('neutro');
  });
});

describe('Quando o valor inserido não for um número', () => {
  it('retorna "o valor deve ser um número"', () => {
    const result = isGreatherLessOrEqualZero('o');

    expect(result).to.be.equals('o valor deve ser um número');
  });
});
