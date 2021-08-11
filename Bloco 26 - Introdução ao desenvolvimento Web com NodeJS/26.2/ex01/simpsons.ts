import fs from 'fs/promises';

type Simpsons = {
  id: string;
  name: string;
}[];

const stringy = (x: any) => JSON.stringify(x);

const getSimpsons = async (path: string) => {
  const data = await fs.readFile(path, 'utf-8');

  if (!data) console.error('Erro!');

  const simpsons: Simpsons = JSON.parse(data);

  return simpsons;
};

const printSimpsons = (simpsons: Simpsons) => {
  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

const findSimpson = (simpsons: Simpsons, id: number) =>
  simpsons.find((simp) => id === Number(simp.id));

const runSimpsons = async (id: number) => {
  const simpsons = await getSimpsons('simpsons.json');
  const simpson = findSimpson(simpsons, id);

  printSimpsons(simpsons);
  console.log(simpson);
};

const removeSimpsonsById = async (ids: number[]) => {
  try {
    const simpsons = await getSimpsons('simpsons.json');
    const changedSimpsons = simpsons.filter(
      (simpson) => !ids.includes(Number(simpson.id))
    );

    await fs.writeFile('simpsons.json', stringy(changedSimpsons));
    console.log('Alteração feita com sucesso =)');
  } catch (err) {
    console.error(err);
  }
};

const createSimpsonsFileById = async (fileName: string, ids: number[]) => {
  try {
    const simpsons = await getSimpsons('simpsons.json');
    const includedSimpsons = simpsons.filter((simpson) =>
      ids.includes(Number(simpson.id))
    );
    const stringySimpsons = stringy(includedSimpsons);

    await fs.writeFile(fileName, stringySimpsons, { flag: 'wx' });
    console.log('Criação do arquivo feita com sucesso =)');
  } catch (err) {
    console.error(err);
  }
};

const addSimpsonsInAFileByName = async (fileName: string, ids: string[]) => {
  try {
    const simpsons = await getSimpsons(fileName);

    const newSimpsons = ids.map((name, index) => ({
      id: String(simpsons.length + index),
      name,
    }));

    const updatedSimpsons = [...simpsons, ...newSimpsons];

    const stringySimpsons = stringy(updatedSimpsons);

    fs.writeFile(fileName, stringySimpsons);

    console.log('Adição feita com sucesso =)');
  } catch (err) {
    console.error(err);
  }
};

runSimpsons(2);
removeSimpsonsById([6, 10]);
createSimpsonsFileById('simpsonFamily.json', [1, 2, 3, 4]);
addSimpsonsInAFileByName('simpsonFamily.json', ['Nelson Muntz']);
