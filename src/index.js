import path from 'path';
import generateDiffTree from './generateDiffTree.js';
import formatData from './formatters/index.js';
import getData from './getFileData.js';

const buildFullPath = (userFilePath) => path.resolve(userFilePath);

const compare = (filepath1, filepath2, format = 'stylish') => {
  const path1 = buildFullPath(filepath1);
  const path2 = buildFullPath(filepath2);
  const dataFromFile1 = getData(path1);
  const dataFromFile2 = getData(path2);
  const internalTree = generateDiffTree(dataFromFile1, dataFromFile2);
  return formatData(internalTree, format);
};

export default compare;
