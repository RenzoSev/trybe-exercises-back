import fs from 'fs/promises';

const createFiles = async (arr: string[]) => {
  const files = arr.map((message, index) =>
    fs.writeFile(`file${index + 1}.txt`, message)
  );

  await Promise.all(files);
};

const readFilesAndCreateOne = async (arr: string[]) => {
  const paths = arr.map((path) => fs.readFile(path, 'utf-8'));

  const files = (await Promise.all(paths)) as string[];

  const allFiles = files.join(' ');

  await fs.writeFile('fileAll.txt', allFiles);
};

const messages = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

createFiles(messages);
readFilesAndCreateOne(files);
