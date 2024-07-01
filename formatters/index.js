import formatToPlain from './viewInPlain.js';
import formatToDefault from './viewInDefault.js';
import formatToJson from './viewInJson.js';

const supportedFormats = ['plain', 'default', 'json'];

const getFormatter = (format) => {
  if (supportedFormats.indexOf(format) === -1) {
    throw new Error('Wrong output format');
  }
  switch (format) {
    case 'plain':
      return formatToPlain;
    case 'json':
      return formatToJson;
    default:
      return formatToDefault;
  }
};

export default getFormatter;
