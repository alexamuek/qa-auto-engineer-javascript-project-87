import fs from 'fs';

const getFileData = (path) => {
  const fileData = fs.readFileSync(path, { encoding: 'UTF-8', flag: 'r' });
  return fileData;
};

export default getFileData;
