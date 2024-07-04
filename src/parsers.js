import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const parse = (path1, path2) => {
  const format = path.extname(path1);
  if (['.yml', '.yaml', '.json'].indexOf(format) === -1) {
    throw new Error('Wrong file format');
  }
  const parser = format === '.json' ? JSON.parse : yaml.load;
  const fileData1 = fs.readFileSync(path1, { encoding: 'UTF-8', flag: 'r' });
  const fileData2 = fs.readFileSync(path2, { encoding: 'UTF-8', flag: 'r' });
  const obj1 = parser(fileData1);
  const obj2 = parser(fileData2);
  const preparedObj1 = obj1 || {};
  const preparedObj2 = obj2 || {};
  return [preparedObj1, preparedObj2];
};

export default parse;
