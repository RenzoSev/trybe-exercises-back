import { expect } from 'chai';
import fs from 'fs/promises';
import sinon from 'sinon';
import writeAsync from '../functions/writeAsync';

describe('Quando a escrita é concluída em um arquivo específico', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  it('retorna "ok" quando é concluído com sucesso', async () => {
    const resposta = await writeAsync('teste.txt', 'conteúdo');

    expect(resposta).to.be.equals('ok');
  });
});
