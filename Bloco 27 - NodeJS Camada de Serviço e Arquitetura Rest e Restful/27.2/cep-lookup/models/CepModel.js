import connection from './connection.js';

class CepModel {
  async getByCep(cep) {
    const query = 'SELECT * FROM ceps WHERE cep=?';

    const literals = [cep];

    const [cep] = await connection.execute(query, literals);

    if (!cep) return null;

    return cep;
  }
}

export default CepModel;
