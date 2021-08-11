const numPromise = (a: number, b: number, c: number) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(Error('Não é um número'));

    const result = (a + b) * c;

    resolve(result < 50 ? 'Valor muito baixo' : result);
  });

  return promise;
};
