const formatToDefault = (sortedLines) => {
  const funcs = {
    unchanged: (node) => `    ${node.key}: ${node.value}`,
    added: (node) => `  + ${node.key}: ${node.value}`,
    removed: (node) => `  - ${node.key}: ${node.value}`,
    changed: (node) => `  - ${node.key}: ${node.previousValue}\n  + ${node.key}: ${node.value}`,
  };
  const result = sortedLines.reduce((acc, item) => {
    const newLine = funcs[item.status](item);
    return `${acc}${newLine}\n`;
  }, '');
  return `{\n${result}}`;
};

export default formatToDefault;
