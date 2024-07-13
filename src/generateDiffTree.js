import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.map((k) => {
    if (!_.has(obj1, k)) {
      return { key: k, status: 'added', value: obj2[k] };
    }
    if (!_.has(obj2, k)) {
      return { key: k, status: 'removed', value: obj1[k] };
    }
    if (obj1[k] === obj2[k]) {
      return { key: k, status: 'unchanged', value: obj1[k] };
    }
    return {
      key: k, status: 'changed', value: obj2[k], previousValue: obj1[k],
    };
  });
  return diff;
};

const generateDiffTree = (obj1, obj2) => {
  const diff = buildTree(obj1, obj2);
  return diff;
};

export default generateDiffTree;
