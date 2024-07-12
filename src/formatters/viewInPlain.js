const formatToPlain = (sortedLines) => {
  const funcs = {
    unchanged: () => '',
    added: (node) => `Property '${node.key}' was added with value: ${node.value}`,
    removed: (node) => `Property '${node.key}' was removed`,
    changed: (node) => `Property '${node.key}' was updated. From ${node.previousValue} to ${node.value}`,
  };
  const result = sortedLines.reduce((acc, item) => {
    const newLine = funcs[item.status](item);
    if (newLine !== '') {
      return `${acc}${newLine}\n`;
    }
    return acc;
  }, '');
  return result.slice(0, -1);
};

export default formatToPlain;
