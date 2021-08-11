import fs from 'fs/promises';
import readline from 'readline-sync';

const questionFile = readline.question('Qual arquivo você deseja ler?');

const readChoosedFile = async (file: string) => {
  try {
    const data = await fs.readFile(file, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`${err}: Arquivo inexistente`);
  }
};

readChoosedFile(questionFile);
