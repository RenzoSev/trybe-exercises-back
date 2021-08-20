const cepFormat = (cep) => {
  const formatedCep = cep.replace('-', '');

  return formatedCep;
};

export { cepFormat };
