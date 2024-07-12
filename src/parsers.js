import yaml from 'js-yaml';

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

export default getParser;
