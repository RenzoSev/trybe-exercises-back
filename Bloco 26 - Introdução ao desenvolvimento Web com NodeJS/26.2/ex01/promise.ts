const getRandomNumber = () => Math.round(Math.random() * 100);

const getThreeRNS = () => ({
  firstRN: getRandomNumber(),
  secondRN: getRandomNumber(),
  thirdRN: getRandomNumber(),
});

const numPromise = (a: number, b: number, c: number) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(Error('Não é um número'));

    const result = (a + b) * c;

    resolve(result < 50 ? 'Valor muito baixo' : result);
  });

  return promise;
};

const useThenCatchToGetPromise = () => {
  const { firstRN, secondRN, thirdRN } = getThreeRNS();

  numPromise(firstRN, secondRN, thirdRN)
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

const useAsyncAwaitToGetPromise = async () => {
  const { firstRN, secondRN, thirdRN } = getThreeRNS();

  try {
    const result = await numPromise(firstRN, secondRN, thirdRN);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

useThenCatchToGetPromise();
useAsyncAwaitToGetPromise();
