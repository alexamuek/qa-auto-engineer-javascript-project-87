const formatToPlain = (sortedLines) => {
  const funcs = {
    unchanged: () => '',
    added: (node) => `Property '${node.key}' was added with value: ${node.value}`,
    removed: (node) => `Property '${node.key}' was removed`,
    changed: (node) => `Property '${node.key}' was updated. From ${node.previousValue} to ${node.value}`,
  };
  const result = sortedLines
    .map((item) => funcs[item.status]?.(item))
    .filter(Boolean)
    .join('\n');
  return result;
};

export default formatToPlain;
