import { expect } from 'chai';
import fs from 'fs';
import sinon from 'sinon';
import writeSync from '../functions/writeSync';

describe('Quando a escrita é concluída em um arquivo específico', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  it('retorna "ok" quando é concluído com sucesso', () => {
    const resposta = writeSync('teste.txt', 'conteúdo');

    expect(resposta).to.be.equals('ok');
  });
});
