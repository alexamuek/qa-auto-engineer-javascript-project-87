import formatToPlain from './viewInPlain.js';
import formatToDefault from './viewInDefault.js';

const getFormatter = (format) => {
  if (format !== 'plain' && format !== 'default') {
    throw new Error('Wrong output format');
  }
  if (format === 'plain') {
    return formatToPlain;
  }
  return formatToDefault;
};

export default getFormatter;
