import formatToPlain from './viewInPlain.js';
import formatToDefault from './viewInDefault.js';
import formatToJson from './viewInJson.js';

const supportedFormats = ['plain', 'json', 'stylish'];

const getFormatter = (format) => {
  if (supportedFormats.indexOf(format) === -1) {
    throw new Error('Wrong output format');
  }
  const formatters = {
    json: formatToJson,
    plain: formatToPlain,
    stylish: formatToDefault,
  };
  return formatters[format];
};

export default getFormatter;
