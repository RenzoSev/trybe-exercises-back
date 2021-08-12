import fs from 'fs/promises';

const writeAsync = async (file: string, content: string) => {
  await fs.writeFile(file, content);
  return 'ok';
};

export default writeAsync;
