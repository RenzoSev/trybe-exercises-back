import { expect } from 'chai';

const funcao = () => {};

describe('Quando o número for maior que 0', () => {
  it('retorna "positivo"', () => {
    const result = funcao();

    expect(result).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
  it('retorna "negativo"', () => {
    const result = funcao();

    expect(result).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
  it('retorna "neutro"', () => {
    const result = funcao();

    expect(result).to.be.equals('neutro');
  });
});
