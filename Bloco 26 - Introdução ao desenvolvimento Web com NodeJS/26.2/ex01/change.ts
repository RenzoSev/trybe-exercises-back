import fs from 'fs/promises';
import readline from 'readline-sync';

const question = async () => {
  try {
    const questionFile = readline.question('Qual arquivo alterar?');

    const file = await fs.readFile(questionFile, 'utf-8');

    const rmWord = readline.question('Qual palavra alterar?');
    const addWord = readline.question('Qual palavra adicionar?');

    const newWord = file.replace(new RegExp(rmWord, 'g'), addWord);

    await fs.writeFile(questionFile, newWord);
  } catch (err) {
    console.error(`${err}: 'Arquivo inexistente`);
  }
};

question();
