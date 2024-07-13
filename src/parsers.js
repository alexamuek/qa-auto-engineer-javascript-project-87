import yaml from 'js-yaml';

const getParser = (format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };
  return parsers[format];
};

export default getParser;
