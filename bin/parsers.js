import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const parser = (path1, path2) => {
  let parse;
  const format = path.extname(path1) + path.extname(path2);
  if (format === '.json.json') {
    parse = JSON.parse;
  } else if (['.yml.yaml', '.yaml.yml', '.yml.yml', '.yaml.yaml'].indexOf(format) !== -1) {
    parse = yaml.load;
  } else {
    throw new Error('Wrong file format');
  }
  const fileData1 = fs.readFileSync(path1, { encoding: 'UTF-8', flag: 'r' });
  const fileData2 = fs.readFileSync(path2, { encoding: 'UTF-8', flag: 'r' });
  const obj1 = parse(fileData1);
  const obj2 = parse(fileData2);
  const preparedObj1 = obj1 || {};
  const preparedObj2 = obj2 || {};
  return [preparedObj1, preparedObj2];
};

export default parser;
