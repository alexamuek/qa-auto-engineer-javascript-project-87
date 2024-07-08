import yaml from 'js-yaml';
import path from 'path';

const getParser = (format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };
  const key = format.slice(1, format.length);
  const result = parsers[key];
  return result;
};

const parse = (fileData1, fileData2, filePath) => {
  const format = path.extname(filePath);
  if (['.yml', '.yaml', '.json'].indexOf(format) === -1) {
    throw new Error('Wrong file format');
  }
  const parser = getParser(format);
  const obj1 = parser(fileData1);
  const obj2 = parser(fileData2);
  const preparedObj1 = obj1 || {};
  const preparedObj2 = obj2 || {};
  return [preparedObj1, preparedObj2];
};

export default parse;
