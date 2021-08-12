import fs from 'fs';

const writeSync = (file: string, content: string) => {
  fs.writeFileSync(file, content);
  return 'ok';
};

export default writeSync;
