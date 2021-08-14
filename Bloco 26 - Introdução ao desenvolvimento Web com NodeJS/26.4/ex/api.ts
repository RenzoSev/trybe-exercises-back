import fs from 'fs/promises';

export const getSimpsons = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf-8');

  return simpsons;
};

export const setSimpsons = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf-8');

  return simpsons;
};
