import fs from 'fs/promises';

type Simpson = { id: string; name: string };

type Simpsons = Simpson[];

export const getSimpsons = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf-8');

  const parsedSimpsons: Simpsons = JSON.parse(simpsons);

  return parsedSimpsons;
};

export const setSimpsons = async (simpson: Simpson, simpsons: Simpsons) => {
  const newSimpsons = simpsons.concat(simpson);

  const stringySimpsons = JSON.stringify(newSimpsons);

  await fs.writeFile('simpsons.json', stringySimpsons);
};
