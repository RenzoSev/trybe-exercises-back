import connection from './connection.js';

class CepModel {
  async getByCep(cepParams) {
    const query = 'SELECT * FROM ceps WHERE cep=?';

    const literals = [cepParams];

    const [cep] = await connection.execute(query, literals);

    if (!cep.length) return null;

    return cep;
  }

  async create(cepBody) {
    const query =
      'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

    const { cep, logradouro, bairro, localidade, uf } = cepBody;

    const literals = [cep, logradouro, bairro, localidade, uf];

    const [craetedCep] = await connection.execute(query, literals);

    return craetedCep;
  }
}

export default CepModel;
