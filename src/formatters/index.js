import formatToPlain from './viewInPlain.js';
import formatToDefault from './viewInDefault.js';
import formatToJson from './viewInJson.js';

const formatters = {
  json: formatToJson,
  plain: formatToPlain,
  stylish: formatToDefault,
};

export default (tree, type) => {
  const format = formatters[type];
  if (!format) {
    throw new Error(`Unknown format '${type}'`);
  }
  return format(tree);
};
